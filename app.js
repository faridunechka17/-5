const num = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1','div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

num.sort((a, b) => {
    if (a < b) {
        return 1; // Если a меньше b, возвращаем положительное число
    } else if (a > b) {
        return -1; // Если a больше b, возвращаем отрицательное число
    } else {
        return 0; // Если a равно b, возвращаем 0
    }
});

console.log(num);



const includesBooks = (...books) => {
    const booksU = books.filter((book) => book.toLowerCase().includes('у'))
    const noBooksU = books.filter((book) => !book.toLowerCase().includes('у'))
    console.log(' книги с буквой у: '+ booksU )
    console.log(' книги без буквы у: '+ noBooksU )
}
includesBooks('Война и мир','Преступление и наказание', 'Унесённые ветром', 'Гордость и предубеждение')


const courses = [
    {
        courseName: 'JavaScript',
        students: [
            { name: 'John', grades: [60, 55, 95] },
            { name: 'Jack', grades: [59, 90, 95] }
        ]
    },
    {
        courseName: 'Python',
        students: [
            { name: 'Mark', grades: [78, 82, 80] },
            { name: 'Alice', grades: [85, 88, 90] }
        ]
    }
];

const coursesWithAverages = courses.map(course => {
    const studentsWithAverages = course.students.map(student => {
        const sum = student.grades.reduce((total, grade) => total + grade, 0);
        const averageGrade = sum / student.grades.length;
        return {
            name: student.name,
            averageGrade: averageGrade
        };
    });
    return {
        courseName: course.courseName,
        students: studentsWithAverages
    };
});

console.log(coursesWithAverages);



