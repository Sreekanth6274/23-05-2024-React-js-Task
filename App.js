import './App.css';
import charminarImage from './Charminar_600.jpg';
import biryaniImage from "./biryani.jpg";
import Bridge from './Bridge';


function App() {
  const h1style = {
   textAlign: "center"
   
  }

  const style1={
    backgroundColor: "yellow",
    display: "inline-block",
    padding: "5px",
    marginTop:"10px",
    borderRadius:"10px"
  }
  return (
    <div className='hyd4' >
      <h1 style={{backgroundColor: "yellow", textAlign: "center"}}>About Hyderabad</h1>
      <img src={charminarImage}
      alt="Charminar in Hyderabad" 
      style={{ display: "block", margin: "0 auto", width: "400px", height:'350px', borderRadius:"10px" }} />
      <h1 style={h1style}>
        <span style={style1}>Charminar</span> 
        </h1>
      <p style={{fontSize:"large"}}>   The Charminar  is a monument located in Hyderabad, Telangana, India. Constructed in 1591, 
        the landmark is a symbol of Hyderabad and officially incorporated in the emblem of Telangana.
         The Charminar's long history includes the existence of a mosque on its top floor for more than 425 years.
         While both historically and religiously significant, 
         it is also known for its popular and busy local markets surrounding the structure, 
         and has become one of the most frequented tourist attractions in Hyderabad. 
         Charminar is also a site of numerous festival celebrations, such as Eid-ul-adha and Eid al-Fitr,
          as it is adjacent to the city's main mosque, the Makkah Masjid.</p>

      <img src={biryaniImage} alt='biyani' className='food'/>
      <h1 className='hyd1'>
        <span className='hyd2'>Famous Biryani</span> 
        </h1>
        <p style={{fontSize:"large"}}>Hyderabadi Dum Biryani, the key dish of the royal kitchen came to India after Emperor Aurangzeb appointed 
          Nizam-Ul-Mulk as the new ruler of Hyderabad. Hyderabad was conquered by the Mughals in the 1630s, 
          and ruled by its Nizams Mughlai culinary traditions got mixed with local traditions to make Hyderabadi cuisine.</p>
         <Bridge/>
    </div>

  );
}

export default App;
