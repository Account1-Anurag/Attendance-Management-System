// Function to generate student data
function generateStudentData() {
    const students = [];
    const totalClasses = 50; // Constant sum of present and absent for each student
  
    for (let i = 1; i <= 72; i++) {
      const enrollmentNumber = `0902CS221${i.toString().padStart(3, '0')}`;
      const present = Math.floor(Math.random() * (totalClasses + 1));
      const absent = totalClasses - present;
  
      students.push({
        id: enrollmentNumber,
        name: `Student ${i}`,
        present,
        absent,
      });
    }
    return students;
  }
  
  // Generate and log student data
  const studentData = generateStudentData();
  console.log(studentData);
  