
import cableBridge from "./Durgam-Cheruvu-Bridge-1.webp";

const Bridge =() =>{

    const style3 = {
        textAlign: "center",
        marginTop: "10px"
       }

    return(
    <div>
    <img  src={cableBridge} alt='bridge' style={{ display: "block", margin: "0 auto", width: "400px", height:'350px', borderRadius:"10px" }}/>
         <h1 style={style3}>
          <span className='bg-warning rounded d-inline p-1 m-1 '>Cable Bridge</span>
         </h1>
         <p style={{fontSize:"large"}}>
         The Durgam Cheruvu Cable Bridge is an extradosed bridge in Hyderabad, Telangana, India. 
         The bridge is located near Inorbit Mall at Madhapur. The bridge connects Jubilee Hills with
          Financial District and eases traffic congestion to Madhapur across Durgam Cheruvu.Each pillar it has 13 
          cables each side.The city experienced a boom in traffic due to the increasing number of cars owned, 
          and the Jubilee Hills to Madhapur commute, which historically took 30 minutes, began to take 60 minutes. 
          The Government of Telangana then put forward a proposal of a bridge through Durgam Cheruvu to ease traffic
           in the area and cut down travel time to 10 minutes
         </p>
        
      </div>
    );
}
export default Bridge