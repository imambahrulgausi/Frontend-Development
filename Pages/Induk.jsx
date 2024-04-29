import Baju from "../Components/Baju";
import Button from "../Components/Button";

function Induk() {
    const detail = {merek:"uniqlo", ukuran:"L"};
    function handleClick() {
        alert('Baju telah di pesan')
    }
    return ( 
        <>
            <div>
                <Baju data={detail}/>
                <Button onClick={handleClick}/>
            </div>
        </>
     );
}
 
export default Induk;