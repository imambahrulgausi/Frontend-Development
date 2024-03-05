import viteLogo from '/vite.svg'

function Utama() {
    return ( 
        <>
            <h2>Bagian Utama</h2>

            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </div>

            <p>Tugas Frontend Development</p>

            <div>
                <h1 style={{color: 'blue'}}>A Blue Heading</h1>
                <p style={{color: 'pink'}}>A red paragraph.</p>
            </div>

        </>
     );
}

export default Utama;