function Header({HandleClick, OpClear, resultOp}){
    return(
        <>
        <div>
            <button onClick={()=>{
                HandleClick("7")
            }}>7</button>
            <button onClick={()=>{
                HandleClick("8")
            }}>8</button>
            <button onClick={()=>{
               HandleClick("9")
            }}>9</button>
            <button onClick={()=>{
               HandleClick("/")
            }} className="oprt">/</button>
        </div>
        <div>
            <button onClick={()=>{
               HandleClick("4")
            }}>4</button>
            <button onClick={()=>{
                HandleClick("5")
            }}>5</button>
            <button onClick={()=>{
                HandleClick("6")
            }}>6</button>
            <button onClick={()=>{
                HandleClick("*")
            }} className="oprt">*</button>
        </div>
        <div>
            <button onClick={()=>{
                HandleClick("1")
            }}>1</button>
            <button onClick={()=>{
                HandleClick("2")
            }}>2</button>
            <button onClick={()=>{
                HandleClick("3")
            }}>3</button>
            <button onClick={()=>{
               HandleClick("-")
            }} className="oprt">-</button>
        </div>
        <div>
            <button onClick={()=>{
                HandleClick("0")
            }}>0</button>
            <button onClick={()=>{
                OpClear()
            }} className="entr">C</button>
            <button onClick={()=>{
                resultOp()
            }} className="entr">=</button>
            <button onClick={()=>{
                HandleClick("+")
            }} className="oprt">+</button>
        </div>
        </>
    )
}

export default Header