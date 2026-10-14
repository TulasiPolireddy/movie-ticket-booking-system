const defaultMovies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        genre: "Action",
        language: "English",
        price: 250,
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        trailer: "https://www.youtube.com/results?search_query=Avengers+Endgame+official+trailer"
    },
    {
        id: 2,
        title: "RRR",
        genre: "Action",
        language: "Telugu",
        price: 200,
        poster: "https://image.tmdb.org/t/p/w500/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg",
        trailer: "https://www.youtube.com/results?search_query=RRR+official+trailer"
    },
    {
        id: 3,
        title: "The Conjuring",
        genre: "Horror",
        language: "English",
        price: 220,
        poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        trailer: "https://www.youtube.com/results?search_query=The+Conjuring+official+trailer"
    },
    {
        id: 4,
        title: "Zindagi Na Milegi Dobara",
        genre: "Comedy",
        language: "Hindi",
        price: 180,
        poster: "https://image.tmdb.org/t/p/w500/4aD0l5b7c5s9fJ9v6e0Z2x0g.jpg",
        trailer: "https://www.youtube.com/results?search_query=Zindagi+Na+Milegi+Dobara+trailer"
    },
    {
        id: 5,
        title: "Interstellar",
        genre: "Sci-Fi",
        language: "English",
        price: 250,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        trailer: "https://www.youtube.com/results?search_query=Interstellar+official+trailer"
    },
    {
        id: 6,
        title: "Premalu",
        genre: "Romance",
        language: "Telugu",
        price: 180,
        poster: "https://image.tmdb.org/t/p/w500/2r5h7k5d8u8f8y3Q9v5x0q.jpg",
        trailer: "https://www.youtube.com/results?search_query=Premalu+official+trailer"
    }
];

function loadData(key, fallback) {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return value ?? fallback;
    } catch {
        return fallback;
    }
}

let movies = loadData("mm_movies", defaultMovies);
let bookings = loadData("mm_bookings", []);
let selectedMovie = null;
let selectedSeats = [];
let appliedCoupon = "";
let currentDiscount = 0;

const $ = id => document.getElementById(id);

function saveData() {
    localStorage.setItem("mm_movies", JSON.stringify(movies));
    localStorage.setItem("mm_bookings", JSON.stringify(bookings));
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function safeURL(value) {
    try {
        const url = new URL(value);
        return ["https:", "http:"].includes(url.protocol) ? url.href : "";
    } catch {
        return "";
    }
}

function renderMovies() {
    const search = $("searchMovie").value.toLowerCase();
    const genre = $("genreFilter").value;
    const language = $("languageFilter").value;

    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(search) &&
        (genre === "All" || movie.genre.toLowerCase() === genre.toLowerCase()) &&
        (language === "All" || movie.language.toLowerCase() === language.toLowerCase())
    );

    $("movieList").innerHTML = filtered.length
        ? filtered.map(movie => `
            <div class="movie-card">
                <img src="${escapeHTML(safeURL(movie.poster))}"
                     alt="${escapeHTML(movie.title)} poster"
                     onerror="this.onerror=null;this.src='https://placehold.co/400x600/222/fff?text=Movie+Poster'">
                <div class="movie-info">
                    <h3>${escapeHTML(movie.title)}</h3>
                    <p>${escapeHTML(movie.genre)} | ${escapeHTML(movie.language)}</p>
                    <p>Ticket Price: ₹${Number(movie.price)}</p>
                    <button class="btn" onclick="showMovieDetails(${Number(movie.id)})">
                        Details & Trailer
                    </button>
                    <button class="btn" onclick="startBooking(${Number(movie.id)})">
                        Book Tickets
                    </button>
                </div>
            </div>
        `).join("")
        : "<p>No movies found. Try another search.</p>";
}

function showMovieDetails(id) {
    const movie = movies.find(item => item.id === id);
    if (!movie) return;

    const trailer = safeURL(movie.trailer);

    alert(
        `Movie: ${movie.title}\n` +
        `Genre: ${movie.genre}\n` +
        `Language: ${movie.language}\n` +
        `Ticket Price: ₹${movie.price}\n\n` +
        `The trailer will open in a new tab.`
    );

    if (trailer) {
        window.open(trailer, "_blank", "noopener,noreferrer");
    }
}

function startBooking(id) {
    selectedMovie = movies.find(movie => movie.id === id);
    if (!selectedMovie) return;

    selectedSeats = [];
    appliedCoupon = "";
    currentDiscount = 0;

    $("bookingSection").classList.remove("hidden");
    $("confirmation").classList.add("hidden");

    $("selectedMovieInfo").innerHTML = `
        <h3>${escapeHTML(selectedMovie.title)}</h3>
        <p>${escapeHTML(selectedMovie.genre)} | ${escapeHTML(selectedMovie.language)}</p>
    `;

    $("ticketPrice").textContent = selectedMovie.price;
    $("couponCode").value = "";
    $("couponMessage").textContent = "";

    const today = new Date();
    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    $("showDate").min = localToday;
    $("showDate").value = localToday;

    renderSeats();
    updateSummary();

    $("bookingSection").scrollIntoView({ behavior: "smooth" });
}

function getShowKey() {
    return [
        selectedMovie?.id,
        $("city").value,
        $("theatre").value,
        $("showDate").value,
        $("showTime").value
    ].join("|");
}

function getBookedSeats() {
    const showKey = getShowKey();
    return bookings
        .filter(booking => booking.showKey === showKey)
        .flatMap(booking => booking.seats);
}

function renderSeats() {
    if (!selectedMovie) return;

    const bookedSeats = getBookedSeats();
    const seats = [];

    for (let row = 0; row < 5; row++) {
        for (let col = 1; col <= 8; col++) {
            const seat = String.fromCharCode(65 + row) + col;
            const isBooked = bookedSeats.includes(seat);
            const isSelected = selectedSeats.includes(seat);

            seats.push(`
                <button type="button"
                    class="seat ${isBooked ? "booked" : ""} ${isSelected ? "selected" : ""}"
                    ${isBooked ? "disabled" : ""}
                    aria-label="Seat ${seat}${isBooked ? ", booked" : ""}"
                    onclick="toggleSeat('${seat}')">
                    ${seat}
                </button>
            `);
        }
    }

    $("seatLayout").innerHTML = seats.join("");
}

function toggleSeat(seat) {
    if (getBookedSeats().includes(seat)) return;

    if (selectedSeats.includes(seat)) {
        selectedSeats = selectedSeats.filter(item => item !== seat);
    } else {
        selectedSeats.push(seat);
    }

    renderSeats();
    updateSummary();
}

function updateSummary() {
    const subtotal = selectedSeats.length * Number(selectedMovie?.price || 0);
    const total = Math.max(0, subtotal - currentDiscount);

    $("selectedSeats").textContent = selectedSeats.length
        ? selectedSeats.join(", ")
        : "None";

    $("subtotal").textContent = subtotal;
    $("discount").textContent = currentDiscount;
    $("totalAmount").textContent = total;
}

function applyCoupon() {
    const code = $("couponCode").value.trim().toUpperCase();
    const subtotal = selectedSeats.length * Number(selectedMovie?.price || 0);

    if (!selectedSeats.length) {
        $("couponMessage").textContent = "Please select seats first.";
        return;
    }

    if (code === "MOVIE10") {
        currentDiscount = Math.round(subtotal * 0.10);
        appliedCoupon = code;
        $("couponMessage").textContent = "10% discount applied!";
    } else if (code === "MOVIE50") {
        currentDiscount = Math.min(50, subtotal);
        appliedCoupon = code;
        $("couponMessage").textContent = "₹50 discount applied!";
    } else {
        currentDiscount = 0;
        appliedCoupon = "";
        $("couponMessage").textContent = "Invalid coupon code.";
    }

    updateSummary();
}

function confirmBooking() {
    if (!selectedMovie) return;

    if (!selectedSeats.length) {
        alert("Please select at least one seat.");
        return;
    }

    const selectedDate = $("showDate").value;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!selectedDate || new Date(selectedDate + "T00:00:00") < today) {
        alert("Please select today or a future date.");
        return;
    }

    // Recheck availability before confirming.
    const bookedSeats = getBookedSeats();

    if (selectedSeats.some(seat => bookedSeats.includes(seat))) {
        alert("Some selected seats have just been booked. Please select again.");
        selectedSeats = selectedSeats.filter(
            seat => !bookedSeats.includes(seat)
        );
        renderSeats();
        updateSummary();
        return;
    }

    const subtotal = selectedSeats.length * Number(selectedMovie.price);
    const discount = currentDiscount;
    const total = Math.max(0, subtotal - discount);

    const booking = {
        id: "MM" + Date.now().toString(36).toUpperCase(),
        movieId: selectedMovie.id,
        movie: selectedMovie.title,
        city: $("city").value,
        theatre: $("theatre").value,
        date: selectedDate,
        time: $("showTime").value,
        seats: [...selectedSeats],
        subtotal,
        discount,
        coupon: appliedCoupon,
        total,
        createdAt: new Date().toISOString(),
        status: "Confirmed"
    };

    bookings.push(booking);
    saveData();

    renderBookings();
    renderAdminMovies();

    $("ticketDetails").innerHTML = `
        <h2>🎟️ MovieMania E-Ticket</h2>
        <hr>
        <p><strong>Booking ID:</strong> ${escapeHTML(booking.id)}</p>
        <p><strong>Movie:</strong> ${escapeHTML(booking.movie)}</p>
        <p><strong>City:</strong> ${escapeHTML(booking.city)}</p>
        <p><strong>Theatre:</strong> ${escapeHTML(booking.theatre)}</p>
        <p><strong>Date:</strong> ${escapeHTML(booking.date)}</p>
        <p><strong>Showtime:</strong> ${escapeHTML(booking.time)}</p>
        <p><strong>Seats:</strong> ${escapeHTML(booking.seats.join(", "))}</p>
        <p><strong>Subtotal:</strong> ₹${booking.subtotal}</p>
        <p><strong>Discount:</strong> ₹${booking.discount}</p>
        <h3>Total Paid: ₹${booking.total}</h3>
        <p>Status: ${escapeHTML(booking.status)}</p>
        <hr>
        <p>Please arrive at the theatre before the show starts.</p>
    `;

    $("confirmation").classList.remove("hidden");
    $("confirmation").scrollIntoView({ behavior: "smooth" });

    selectedSeats = [];
    renderSeats();
    updateSummary();
}

function renderBookings() {
    const container = $("myBookings");

    if (!bookings.length) {
        container.innerHTML = "<p>You have no bookings yet.</p>";
        return;
    }

    container.innerHTML = bookings.slice().reverse().map(booking => `
        <div class="booking-card">
            <h3>${escapeHTML(booking.movie)}</h3>
            <p>Booking ID: ${escapeHTML(booking.id)}</p>
            <p>${escapeHTML(booking.city)} | ${escapeHTML(booking.theatre)}</p>
            <p>Date: ${escapeHTML(booking.date)} | ${escapeHTML(booking.time)}</p>
            <p>Seats: ${escapeHTML(booking.seats.join(", "))}</p>
            <p>Total: ₹${Number(booking.total)}</p>
            <p>Status: ${escapeHTML(booking.status)}</p>
            ${booking.status === "Confirmed"
                ? `<button class="btn" onclick="cancelBooking('${escapeHTML(booking.id)}')">Cancel Booking</button>`
                : ""}
        </div>
    `).join("");
}

function cancelBooking(id) {
    const booking = bookings.find(item => item.id === id);

    if (!booking || booking.status !== "Confirmed") return;

    const confirmed = confirm(
        `Cancel booking ${booking.id} for ${booking.movie}?`
    );

    if (!confirmed) return;

    booking.status = "Cancelled";
    saveData();

    renderBookings();
    renderSeats();
    renderAdminMovies();

    alert("Booking cancelled. This demo does not process actual refunds.");
}

function renderAdminMovies() {
    $("adminMovies").innerHTML = movies.map(movie => `
        <div class="booking-card">
            <div>
                <h3>${escapeHTML(movie.title)}</h3>
                <p>${escapeHTML(movie.genre)} | ${escapeHTML(movie.language)}</p>
                <p>Ticket Price: ₹${Number(movie.price)}</p>
            </div>
            <button class="btn" onclick="deleteMovie(${Number(movie.id)})">
                Delete Movie
            </button>
        </div>
    `).join("");
}

function deleteMovie(id) {
    const movie = movies.find(item => item.id === id);
    if (!movie) return;

    if (!confirm(`Delete ${movie.title} from the movie list?`)) return;

    movies = movies.filter(item => item.id !== id);
    saveData();

    if (selectedMovie?.id === id) {
        selectedMovie = null;
        selectedSeats = [];
        $("bookingSection").classList.add("hidden");
    }

    renderMovies();
    renderAdminMovies();
}

$("movieForm").addEventListener("submit", event => {
    event.preventDefault();

    const title = $("adminTitle").value.trim();
    const genre = $("adminGenre").value.trim();
    const language = $("adminLanguage").value.trim();
    const price = Number($("adminPrice").value);
    const poster = safeURL($("adminPoster").value.trim());
    const trailer = safeURL($("adminTrailer").value.trim());

    if (!title || !genre || !language || !poster || price <= 0) {
        alert("Please enter valid movie details and a valid poster URL.");
        return;
    }

    movies.push({
        id: Date.now(),
        title,
        genre,
        language,
        price,
        poster,
        trailer
    });

    saveData();
    renderMovies();
    renderAdminMovies();

    event.target.reset();
    alert("Movie added successfully!");
});

$("searchMovie").addEventListener("input", renderMovies);
$("genreFilter").addEventListener("change", renderMovies);
$("languageFilter").addEventListener("change", renderMovies);

$("city").addEventListener("change", () => {
    selectedSeats = [];
    renderSeats();
    updateSummary();
});

$("theatre").addEventListener("change", () => {
    selectedSeats = [];
    renderSeats();
    updateSummary();
});

$("showDate").addEventListener("change", () => {
    selectedSeats = [];
    renderSeats();
    updateSummary();
});

$("showTime").addEventListener("change", () => {
    selectedSeats = [];
    renderSeats();
    updateSummary();
});

$("applyCoupon").addEventListener("click", applyCoupon);
$("bookTickets").addEventListener("click", confirmBooking);

$("downloadTicket").addEventListener("click", () => {
    window.print();
});

$("newBooking").addEventListener("click", () => {
    $("confirmation").classList.add("hidden");
    $("bookingSection").classList.add("hidden");
    $("movies").scrollIntoView({ behavior: "smooth" });
});

renderMovies();
renderBookings();
renderAdminMovies();
