let courses = [];

  function fetchCourses() {
    fetch("https://masai-7b971-default-rtdb.firebaseio.com/courses.json")
      .then((res) => res.json())
      .then((data) => {
        courses = Object.entries(data);
        displayCourses(courses);
      });
  }
  fetchCourses();

  function displayCourses(data) {
    console.log(data);
    document.querySelector("#container").innerHTML = "";
    data.forEach(function(elem) {
      let courseID = elem[0];
      let {
        bestseller,
        instructor,
        lectures,
        level,
        price,
        rating,
        reviews,
        title,
        total_hours,
      } = elem[1];
      document.querySelector("#container").innerHTML += `
        <div class="course-card">
      <div class="course-header">
        <h2>${title}</h2>
      </div>
      <div class="course-body">
        <p><strong>Instructor:</strong> ${instructor}</p>
        <p><strong>Total Lectures:</strong> ${lectures}</p>
        <p><strong>Level:</strong> ${level}</p>
        <p class="price"><strong>Price:</strong> ₹${price}</p>
        <p><strong>Total Hours:</strong> ${total_hours} hours</p>
        <p class="best">${bestseller ? "Best Seller" : "Avg seller"}</p>
      </div>
      <div class="course-footer">
        <span class="rating">★ ${rating}</span>
        <span class="reviews">${reviews} reviews</span>
      </div>
      <button>Add to Cart </button>
    </div>
      `;
    });
  }
  document.querySelector("select").addEventListener("change", filterByLevel);

  function filterByLevel() {
    let selectedLevel = document.querySelector("select").value;
    let filteredCourses;
    if (selectedLevel === "All") {
      filteredCourses = courses;
    } else {
      filteredCourses = courses.filter(function(elem) {
        return elem[1].level === selectedLevel;
      });
    }
    console.log(filteredCourses);
    displayCourses(filteredCourses);
  }