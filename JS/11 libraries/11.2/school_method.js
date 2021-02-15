const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: function (type, ID) {
    return this[type].find((element) => element.id === ID);
  },
  assignStudent: function (studentID, subject) {
    const teacher = this.teachers.find(
      (teacher) =>
        teacher.capacityLeft > 0 && teacher.subjects.includes(subject)
    );
    if (!teacher) {
      console.log("sorry, there are no availale teachers!");
      return false;
    }
    Object.assign(teacher, {
      students: [...teacher.students, this.findPerson("students", studentID)],
      capacityLeft: teacher.capacityLeft - 1,
    });
  },
};

school.assignStudent(12, "biology");
console.log(school.findPerson("teachers", 1));

// console.log(school);
// console.log(object);
