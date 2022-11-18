import Card from "./Card"

const cardList = ({robot}) => {
    // if (true){
    //     throw new Error('Noooooo!')
    // }
    return(
        <div>
            {
                robot.map((user, i) => {
                    return < Card key={i} id={robot[i].id} name={robot[i].name} email={robot[i].email}/>;  
                })
            }
        </div>
    );
}

export default cardList;