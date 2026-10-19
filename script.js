
const poster = path => `https://image.tmdb.org/t/p/w500${path}`;

const movies = [
  {id:1,title:"The Dark Knight",genre:"Action",language:"English",rating:9.0,price:200,year:2008,poster:poster("/qJ2tW6WMUDux911r6m7haRef0WH.jpg")},
  {id:2,title:"Interstellar",genre:"Sci-Fi",language:"English",rating:8.7,price:220,year:2014,poster:poster("/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg")},
  {id:3,title:"Spider-Man: Across the Spider-Verse",genre:"Animation",language:"English",rating:8.6,price:220,year:2023,poster:poster("/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg")},
  {id:4,title:"Inception",genre:"Sci-Fi",language:"English",rating:8.8,price:200,year:2010,poster:poster("/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg")},
  {id:5,title:"Avengers: Endgame",genre:"Action",language:"English",rating:8.4,price:250,year:2019,poster:poster("/or06FN3Dka5tukK1e9sl16pB3iy.jpg")},
  {id:6,title:"Dune: Part Two",genre:"Adventure",language:"English",rating:8.5,price:250,year:2024,poster:poster("/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg")},
  {id:7,title:"The Lion King",genre:"Adventure",language:"English",rating:8.5,price:180,year:1994,poster:poster("/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg")},
  {id:8,title:"Joker",genre:"Drama",language:"English",rating:8.3,price:200,year:2019,poster:poster("/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg")},
  {id:9,title:"Coco",genre:"Animation",language:"English",rating:8.4,price:180,year:2017,poster:poster("/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg")},
  {id:10,title:"Top Gun: Maverick",genre:"Action",language:"English",rating:8.2,price:220,year:2022,poster:poster("/62HCnUTziyWcpDaBO2i1DX17ljH.jpg")},
  {id:11,title:"RRR",genre:"Action",language:"Telugu",rating:7.8,price:220,year:2022,poster:poster("/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg")},
  {id:12,title:"Baahubali: The Beginning",genre:"Adventure",language:"Telugu",rating:8.0,price:200,year:2015,poster:poster("/9BAjt8nSSms62uOVYn1t3C3dVto.jpg")},
  {id:13,title:"Ala Vaikunthapurramuloo",genre:"Comedy",language:"Telugu",rating:7.3,price:180,year:2020,poster:poster("/8Qy6p9pJb6s5h0u7K3n2x1v4w8L.jpg")},
  {id:14,title:"3 Idiots",genre:"Comedy",language:"Hindi",rating:8.4,price:180,year:2009,poster:poster("/66A9MqXOyVFCssoloscw79z8Tew.jpg")},
  {id:15,title:"Zindagi Na Milegi Dobara",genre:"Drama",language:"Hindi",rating:8.2,price:180,year:2011,poster:poster("/bqf5z8W4rW8u3Y8z8J4F6T2p1Qx.jpg")}
];

// Food prices are sample prices for this demo website.
const foods = [
  {id:1,name:"Classic Popcorn",category:"Popcorn",icon:"🍿",price:120,description:"Fresh salted popcorn"},
  {id:2,name:"Cheese Popcorn",category:"Popcorn",icon:"🍿",price:160,description:"Popcorn with cheesy flavour"},
  {id:3,name:"Caramel Popcorn",category:"Popcorn",icon:"🍿",price:180,description:"Sweet caramel coating"},
  {id:4,name:"Large Popcorn Tub",category:"Popcorn",icon:"🍿",price:220,description:"Extra-large sharing tub"},
  {id:5,name:"Veg Burger",category:"Meals",icon:"🍔",price:150,description:"Vegetable patty and sauces"},
  {id:6,name:"Cheese Burger",category:"Meals",icon:"🍔",price:190,description:"Burger with melted cheese"},
  {id:7,name:"Chicken Burger",category:"Meals",icon:"🍔",price:220,description:"Crispy chicken burger"},
  {id:8,name:"Margherita Pizza",category:"Meals",icon:"🍕",price:220,description:"Classic cheese pizza"},
  {id:9,name:"Farmhouse Pizza",category:"Meals",icon:"🍕",price:280,description:"Loaded vegetable pizza"},
  {id:10,name:"Chicken Pizza",category:"Meals",icon:"🍕",price:320,description:"Chicken and cheese pizza"},
  {id:11,name:"French Fries",category:"Snacks",icon:"🍟",price:100,description:"Golden crispy fries"},
  {id:12,name:"Peri Peri Fries",category:"Snacks",icon:"🍟",price:130,description:"Spicy seasoned fries"},
  {id:13,name:"Nachos & Cheese",category:"Snacks",icon:"🧀",price:160,description:"Crunchy nachos and dip"},
  {id:14,name:"Veg Sandwich",category:"Snacks",icon:"🥪",price:120,description:"Fresh vegetable sandwich"},
  {id:15,name:"Chicken Sandwich",category:"Snacks",icon:"🥪",price:170,description:"Chicken filling sandwich"},
  {id:16,name:"Veg Puff",category:"Snacks",icon:"🥐",price:50,description:"Flaky vegetable puff"},
  {id:17,name:"Hot Dog",category:"Snacks",icon:"🌭",price:150,description:"Hot dog with sauces"},
  {id:18,name:"Chocolate Brownie",category:"Desserts",icon:"🍫",price:120,description:"Rich chocolate brownie"},
  {id:19,name:"Chocolate Ice Cream",category:"Desserts",icon:"🍨",price:100,description:"Chocolate-flavoured ice cream"},
  {id:20,name:"Vanilla Ice Cream",category:"Desserts",icon:"🍦",price:80,description:"Classic vanilla scoop"},
  {id:21,name:"Donut",category:"Desserts",icon:"🍩",price:90,description:"Sweet glazed donut"},
  {id:22,name:"Chocolate Cake",category:"Desserts",icon:"🍰",price:140,description:"Chocolate cake slice"},
  {id:23,name:"Cold Coffee",category:"Drinks",icon:"🥤",price:130,description:"Chilled creamy coffee"},
  {id:24,name:"Soft Drink",category:"Drinks",icon:"🥤",price:80,description:"Chilled fizzy drink"},
  {id:25,name:"Fresh Lemon Soda",category:"Drinks",icon:"🍋",price:90,description:"Refreshing lemon soda"},
  {id:26,name:"Bottled Water",category:"Drinks",icon:"💧",price:40,description:"Packaged drinking water"},
  {id:27,name:"Popcorn & Cola Combo",category:"Combos",icon:"🍿",price:180,description:"Regular popcorn and soft drink"},
  {id:28,name:"Burger & Fries Combo",category:"Combos",icon:"🍔",price:250,description:"Burger, fries and a drink"},
  {id:29,name:"Pizza & Cola Combo",category:"Combos",icon:"🍕",price:300,description:"Pizza slice and soft drink"},
  {id:30,name:"Movie Night Combo",category:"Combos",icon:"🎬",price:450,description:"Large popcorn, two drinks and fries"}
];

const $ = id => document.getElementById(id);
const money = amount => "₹" + amount.toLocaleString("en-IN");

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

let bookings = readStorage("moviemaniaBookings", []);
let foodCart = readStorage("moviemaniaFood", {});
let bookedSeats = readStorage("moviemaniaBookedSeats", {});
let appliedCoupon = "";
let activeFoodCategory = "All";

function saveData() {
  localStorage.setItem("moviemaniaBookings", JSON.stringify(bookings));
  localStorage.setItem("moviemaniaFood", JSON.stringify(foodCart));
  localStorage.setItem("moviemaniaBookedSeats", JSON.stringify(bookedSeats));
}

function getMovie(id) {
  return movies.find(movie => movie.id === Number(id));
}

function foodTotal() {
  return foods.reduce((sum, food) =>
    sum + food.price * (Number(foodCart[food.id]) || 0), 0);
}

function ticketTotal() {
  const movie = getMovie($("selectedMovie").value);
  return selectedSeats.length * (movie ? movie.price : 200);
}

let selectedSeats = [];

function renderMovies() {
  const search = $("searchMovie").value.toLowerCase().trim();
  const genre = $("genreFilter").value;
  const language = $("languageFilter").value;
  const minRating = Number($("ratingFilter").value);
  const sort = $("sortMovies").value;

  let list = movies.filter(movie =>
    movie.title.toLowerCase().includes(search) &&
    (genre === "All" || movie.genre === genre) &&
    (language === "All" || movie.language === language) &&
    movie.rating >= minRating
  );

  if (sort === "rating") list.sort((a,b) => b.rating - a.rating);
  if (sort === "ratingLow") list.sort((a,b) => a.rating - b.rating);
  if (sort === "title") list.sort((a,b) => a.title.localeCompare(b.title));

  $("movieCount").textContent = `${list.length} movies`;

  $("movieGrid").innerHTML = list.length ? list.map((movie, index) => `
    <article class="movie-card">
      <div class="poster-wrap">
        <img src="${movie.poster}" alt="${escapeHTML(movie.title)} poster"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/500x750/222230/ffffff?text=Movie+Poster'">
        <span class="rating">★ ${movie.rating.toFixed(1)}/10</span>
        ${sort === "rating" && minRating === 0 && !search &&
          genre === "All" && language === "All"
          ? `<span class="rank">#${index + 1}</span>` : ""}
      </div>
      <div class="movie-info">
        <h3>${escapeHTML(movie.title)}</h3>
        <p class="movie-meta">${movie.year || "2026"} · ${escapeHTML(movie.genre)}</p>
        <p class="movie-meta">${escapeHTML(movie.language)}</p>
        <p class="movie-price">${money(movie.price)}</p>
        <button class="btn" onclick="chooseMovie(${movie.id})">Book Tickets</button>
      </div>
    </article>
  `).join("") : `<p class="empty-state">No movies match your search.</p>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;",
    '"':"&quot;", "'":"&#39;"
  })[character]);
}

function renderMovieOptions() {
  const current = $("selectedMovie").value;
  const sorted = [...movies].sort((a,b) => b.rating - a.rating);

  $("selectedMovie").innerHTML = sorted.map(movie =>
    `<option value="${movie.id}">${escapeHTML(movie.title)} — ★ ${movie.rating.toFixed(1)}</option>`
  ).join("");

  if (sorted.some(movie => String(movie.id) === current)) {
    $("selectedMovie").value = current;
  }

  if (!sorted.some(movie => String(movie.id) === $("selectedMovie").value)) {
    $("selectedMovie").value = sorted[0]?.id || "";
  }

  $("summaryMovie").textContent =
    getMovie($("selectedMovie").value)?.title || "Choose a movie";
}

function chooseMovie(id) {
  $("selectedMovie").value = String(id);
  selectedSeats = [];
  renderSeats();
  updateSummary();
  $("booking").scrollIntoView({behavior:"smooth"});
}

function seatKey() {
  return [
    $("selectedMovie").value,
    $("city").value,
    $("theatre").value,
    $("showDate").value,
    $("showTime").value
  ].join("|");
}

function renderSeats() {
  const key = seatKey();
  const booked = bookedSeats[key] || [];
  const rows = ["A","B","C","D","E","F"];
  let html = "";

  rows.forEach((row, rowIndex) => {
    for (let number = 1; number <= 8; number++) {
      const seat = row + number;
      const isBooked = booked.includes(seat);
      const isSelected = selectedSeats.includes(seat);

      // Demonstration: a few seats start booked for each show.
      const initiallyBooked = rowIndex === 2 && [3,4].includes(number);
      const unavailable = isBooked || initiallyBooked;

      html += `<button class="seat ${unavailable ? "booked" : ""} ${isSelected ? "selected" : ""}"
        ${unavailable ? "disabled" : ""}
        aria-label="Seat ${seat}${unavailable ? ", booked" : ""}"
        onclick="toggleSeat('${seat}')">${seat}</button>`;
    }
  });

  $("seatMap").innerHTML = html;
  $("selectedSeatsText").textContent = selectedSeats.length
    ? "Selected seats: " + selectedSeats.join(", ")
    : "No seats selected";
}

function toggleSeat(seat) {
  if (selectedSeats.includes(seat)) {
    selectedSeats = selectedSeats.filter(item => item !== seat);
  } else {
    selectedSeats.push(seat);
  }

  renderSeats();
  updateSummary();
}

function renderFood() {
  const list = activeFoodCategory === "All"
    ? foods
    : foods.filter(food => food.category === activeFoodCategory);

  $("foodGrid").innerHTML = list.map(food => {
    const quantity = Number(foodCart[food.id]) || 0;

    return `
      <article class="food-card">
        <div class="food-icon">${food.icon}</div>
        <h3>${escapeHTML(food.name)}</h3>
        <p>${escapeHTML(food.description)}</p>
        <div class="food-bottom">
          <span class="food-price">${money(food.price)}</span>
          <div class="quantity">
            <button aria-label="Remove one ${escapeHTML(food.name)}"
              onclick="changeFood(${food.id},-1)">−</button>
            <span>${quantity}</span>
            <button aria-label="Add one ${escapeHTML(food.name)}"
              onclick="changeFood(${food.id},1)">+</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".food-filter").forEach(button => {
    button.classList.toggle("active",
      button.dataset.category === activeFoodCategory);
  });

  $("foodHeaderTotal").textContent = money(foodTotal());
}

function changeFood(id, amount) {
  const next = (Number(foodCart[id]) || 0) + amount;
  if (next <= 0) delete foodCart[id];
  else foodCart[id] = next;

  saveData();
  renderFood();
  updateSummary();
}

function getDiscount(subtotal) {
  if (appliedCoupon === "MOVIE10") return Math.round(subtotal * 0.10);
  if (appliedCoupon === "FOOD50") return foodTotal() >= 300 ? 50 : 0;
  if (appliedCoupon === "FIRST20") return Math.min(20, subtotal);
  return 0;
}

function updateSummary() {
  const tickets = ticketTotal();
  const food = foodTotal();
  const discount = getDiscount(tickets + food);

  $("ticketSubtotal").textContent = money(tickets);
  $("foodSubtotal").textContent = money(food);
  $("discount").textContent = money(discount);
  $("grandTotal").textContent = money(Math.max(0, tickets + food - discount));
  $("summaryMovie").textContent =
    getMovie($("selectedMovie").value)?.title || "Choose a movie";
}

$("applyCoupon").addEventListener("click", () => {
  const code = $("couponCode").value.trim().toUpperCase();

  if (["MOVIE10","FOOD50","FIRST20"].includes(code)) {
    appliedCoupon = code;

    if (code === "FOOD50" && foodTotal() < 300) {
      $("bookingMessage").textContent =
        "Add at least ₹300 worth of food to use FOOD50.";
    } else {
      $("bookingMessage").textContent = `${code} applied successfully!`;
    }
  } else {
    appliedCoupon = "";
    $("bookingMessage").textContent =
      "Invalid coupon. Try MOVIE10, FOOD50 or FIRST20.";
  }

  updateSummary();
});

$("confirmBooking").addEventListener("click", () => {
  const movie = getMovie($("selectedMovie").value);
  const date = $("showDate").value;

  if (!movie) {
    $("bookingMessage").textContent = "Please choose a movie.";
    return;
  }

  if (!date) {
    $("bookingMessage").textContent = "Please select your show date.";
    $("showDate").focus();
    return;
  }

  if (date < todayString()) {
    $("bookingMessage").textContent = "Please select today or a future date.";
    return;
  }

  if (selectedSeats.length === 0 && foodTotal() === 0) {
    $("bookingMessage").textContent =
      "Please select seats or add food before confirming.";
    return;
  }

  const key = seatKey();
  const booked = bookedSeats[key] || [];

  if (selectedSeats.some(seat => booked.includes(seat))) {
    $("bookingMessage").textContent =
      "A selected seat has already been booked. Please select again.";
    selectedSeats = [];
    renderSeats();
    updateSummary();
    return;
  }

  const tickets = ticketTotal();
  const food = foodTotal();
  const discount = getDiscount(tickets + food);

  const foodItems = foods
    .filter(item => Number(foodCart[item.id]) > 0)
    .map(item => ({
      name:item.name,
      quantity:Number(foodCart[item.id]),
      price:item.price
    }));

  const booking = {
    id:"MM" + Date.now().toString().slice(-9),
    movie:movie.title,
    movieId:movie.id,
    city:$("city").value,
    theatre:$("theatre").value,
    date,
    time:$("showTime").value,
    seats:[...selectedSeats],
    food:foodItems,
    ticketTotal:tickets,
    foodTotal:food,
    discount,
    total:Math.max(0,tickets + food - discount),
    status:"Confirmed"
  };

  bookedSeats[key] = [...booked, ...selectedSeats];
  bookings.unshift(booking);

  // Clear this order's food and coupon after successful demo booking.
  foodCart = {};
  appliedCoupon = "";
  $("couponCode").value = "";
  selectedSeats = [];

  saveData();
  renderSeats();
  renderFood();
  renderHistory();
  updateSummary();

  $("bookingMessage").textContent =
    `Booking confirmed! Your booking ID is ${booking.id}.`;

  $("myBookings").scrollIntoView({behavior:"smooth"});
});

function renderHistory() {
  $("bookingHistory").innerHTML = bookings.length
    ? bookings.map(booking => `
      <article class="history-card">
        <h3>🎬 ${escapeHTML(booking.movie)}</h3>
        <p>Booking ID: ${escapeHTML(booking.id)}</p>
        <p>${escapeHTML(booking.city)} · ${escapeHTML(booking.theatre)}</p>
        <p>${escapeHTML(booking.date)} · ${escapeHTML(booking.time)}</p>
        <p>Seats: ${booking.seats.length
          ? escapeHTML(booking.seats.join(", ")) : "Food only"}</p>
        <p>Tickets: ${money(booking.ticketTotal)}</p>
        <p>Food: ${money(booking.foodTotal)}</p>
        ${booking.food?.length
          ? `<p>Items: ${booking.food.map(item =>
              `${escapeHTML(item.name)} × ${item.quantity}`
            ).join(", ")}</p>` : ""}
        <p>Discount: ${money(booking.discount)}</p>
        <p><strong>Total: ${money(booking.total)}</strong></p>
        <p>Status: ${escapeHTML(booking.status)}</p>
        ${booking.status !== "Cancelled"
          ? `<button class="btn danger" onclick="cancelBooking('${booking.id}')">Cancel Booking</button>` : ""}
      </article>
    `).join("")
    : `<p class="empty-state">You have no bookings yet.</p>`;
}

function cancelBooking(id) {
  const booking = bookings.find(item => item.id === id);
  if (!booking || booking.status === "Cancelled") return;

  if (!confirm("Do you want to cancel this demo booking?")) return;

  if (booking.seats.length) {
    const key = [
      booking.movieId,
      booking.city,
      booking.theatre,
      booking.date,
      booking.time
    ].join("|");

    bookedSeats[key] = (bookedSeats[key] || []).filter(
      seat => !booking.seats.includes(seat)
    );
  }

  booking.status = "Cancelled";
  saveData();
  renderHistory();
  renderSeats();
}

function renderAdmin() {
  $("adminMovieList").innerHTML = movies.map(movie => `
    <div class="admin-movie">
      <div>
        <strong>${escapeHTML(movie.title)}</strong>
        <p>${escapeHTML(movie.genre)} · ${escapeHTML(movie.language)}
          · ★ ${movie.rating.toFixed(1)} · ${money(movie.price)}</p>
      </div>
      <button class="btn danger" onclick="removeMovie(${movie.id})">Remove</button>
    </div>
  `).join("");
}

$("addMovieForm").addEventListener("submit", event => {
  event.preventDefault();

  const title = $("adminTitle").value.trim();
  const genre = $("adminGenre").value.trim();
  const language = $("adminLanguage").value;
  const rating = Number($("adminRating").value);
  const price = Number($("adminPrice").value);
  const imageURL = $("adminPoster").value.trim();

  if (!title || !genre || !imageURL ||
      !Number.isFinite(rating) || rating < 0 || rating > 10 ||
      !Number.isFinite(price) || price <= 0) {
    $("adminMessage").textContent = "Please enter valid movie details.";
    return;
  }

  movies.push({
    id:Date.now(),
    title,
    genre,
    language,
    rating,
    price,
    year:new Date().getFullYear(),
    poster:imageURL
  });

  renderAll();
  event.target.reset();
  $("adminMessage").textContent = "Movie added successfully!";
});

function removeMovie(id) {
  const index = movies.findIndex(movie => movie.id === id);
  if (index === -1) return;

  if (!confirm(`Remove "${movies[index].title}" from the movie list?`)) return;

  movies.splice(index, 1);
  renderAll();
}

function todayString() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0,10);
}

function renderAll() {
  renderMovies();
  renderMovieOptions();
  renderFood();
  renderSeats();
  renderHistory();
  renderAdmin();
  updateSummary();
}

["searchMovie","genreFilter","languageFilter","ratingFilter","sortMovies"]
  .forEach(id => $(id).addEventListener(
    id === "searchMovie" ? "input" : "change", renderMovies
  ));

$("selectedMovie").addEventListener("change", () => {
  selectedSeats = [];
  renderSeats();
  updateSummary();
});

["city","theatre","showDate","showTime"].forEach(id => {
  $(id).addEventListener("change", () => {
    selectedSeats = [];
    renderSeats();
    updateSummary();
  });
});

$("showDate").min = todayString();
$("showDate").value = todayString();

$("foodFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeFoodCategory = button.dataset.category;
  renderFood();
});

renderAll();
