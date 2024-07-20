// import { Fragment, useState } from 'react'
// import { LearnComponents } from './components/LearnComponents';

// import { Header } from "./components/Header";
// import { Arraysample } from "./components/Arraysample";
// import { ChilComponent } from "./components/ChilComponent";
// import { OneOfSample } from "./components/OneOfSample";
// import { Student } from "./components/Student";
// import { MultitypeComponent } from "./components/MultitypeComponent";
import { FunctiuonSample } from "./components/FunctiuonSample";
import "./css/app.css"

function App() {
    // const items = [
    //     { id: 1, name: "Items 1" },
    //     { id: 2, name: "Items 2" },
    //     { id: 3, name: "Items 3" }
    // ]

      const handleClick=()=>{
        alert("Button Clicked")
      }



    return (
        <>
            {/* <div>Sangeetha</div>
            <LearnComponents/> */}

            {/* <Header/> */}
            
            {/* <Student name="sangeetha" age={21} isMarried={true}/>
            <Student name="Jayshree" age={21} isMarried={false}/>
            <Student name="Mahe" />

            <ChilComponent>
                <p>This is sample para1</p>
                <p>This is sample para2</p>
            </ChilComponent> */}

            {/* <Arraysample items={items} /> */}


            {/* <OneOfSample color="green"></OneOfSample> */}


            {/* <MultitypeComponent value="hello"></MultitypeComponent>
            <MultitypeComponent value={42}></MultitypeComponent>
            <MultitypeComponent value={true}></MultitypeComponent> */}


          <div>
            <h2>Parent Component</h2>
            <FunctiuonSample handleClick={handleClick}/>
          </div>


          

        </>
    );
}

export default App;