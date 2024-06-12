export default function Project() {
  return (
    <>
    <main>
      <h2>My Projects</h2>
      <section>
        <div className="wrapper">
          <img src="./images/Project 1 - Software Requirement.png" alt="" width="400" height="225" className="row-image"></img>
          <div className="description">
            <h3 >Project 1 - Warehouse Management System Practise</h3>
            <p >In the class, I have done a project with my classmates to practise the actual flow of how a software is developed. 
            We have chosen warehouse management system as our topic. In the group, we have documented the user system requirements, 
            developed a detailed software requirements specification, and built analysis models which include scenario-based, class-based 
            and behavioral-based models using both textual and graphical diagrams &lpar;UML standards&rpar;.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <img src="./images/Project 2 - Music Database.png" alt="" width="400" height="225" className="row-image"></img>
          <div className="description">
            <h3>Project 2 - Music Database</h3>
            <p>This is a linux project called "Music Database". We have learned from online and used API, curl, and jq to complete 
            this project. We got free API from the Internet and used curl as well as jq to extract the data we wanted. Moreover, we have also created 
            some functions, such as sorting, adding and removing music information into local library.</p>   
          </div> 
        </div>
      </section>
      <section>
        <div className="wrapper">
          <img src="./images/Project 3 - Bank Accounts.png" alt="" width="400" height="225" className="row-image"></img>
          <div className="description">
            <h3>Project 3 - Bank Accounting System Practise</h3>
            <p>This is a C# project called "Bank Accounting System". My classmates and I had to divide the work into three and
            did the coding. During the process, we have faced different errors and applied our debug skill to solve the problems.</p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}


