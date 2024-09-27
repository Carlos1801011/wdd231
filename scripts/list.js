const courses = [
    {
        subject: 'CSE',
        number: 110,
        credits: 2,

    },
    {
        subject: 'WDD',
        number: 130,
        credits: 2,

    },
    {
        subject: 'CSE',
        number: 111,
        credits: 2,

    },
    {
        subject: 'CSE',
        number: 210,

        credits: 2,

    },
    {
        subject: 'WDD',
        number: 131,
        credits: 2,

    },
    {
        subject: 'WDD',
        number: 231,
        credits: 2,

    }
]


const coursesContent = document.querySelector(".courses-container");
const totalCredit = document.querySelector(".total-credit");

displayCourses(courses)

function displayCourses(filterCourse) {
    coursesContent.innerHTML = "";

    filterCourse.forEach(course => {
        const createCourseElement = document.createElement("span")
        
        const textNode = document.createTextNode(`${course.subject} ${course.number}`);

        createCourseElement.appendChild(textNode)
        
        coursesContent.appendChild(createCourseElement);

        createCourseElement.classList.add(course.completed === true ? "completed" : "incomplete");        
    })

    const addTotalCredit = filterCourse.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    totalCredit.innerHTML = "Total Credit Required: " + addTotalCredit
};


const allCourse = document.querySelector(".all-course").addEventListener("click", ()=> {
    displayCourses(courses);
});


const cseCourse = document.querySelector(".cse-course").addEventListener("click", ()=>  {
    displayCourses(courses.filter(course => course.subject == "CSE"));
});

const wddCourse = document.querySelector(".wdd-course").addEventListener("click", ()=> {
    displayCourses(courses.filter(course => course.subject == "WDD"));
});