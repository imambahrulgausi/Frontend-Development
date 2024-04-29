function Baju(baju) {
    return ( 
        <>
            <div>
                <p>merek: {baju.data.merek}</p>
                <p>ukuran: {baju.data.ukuran}</p>
            </div>
        </>
     );
}

export default Baju;