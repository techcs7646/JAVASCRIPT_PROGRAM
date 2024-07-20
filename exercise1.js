function classOperation(CustomClass) {
    const obj =new CustomClass;
    obj.work();
}

class Employee{
    work(){
        console.log("employee are working");
    }
}

classOperation(Employee);