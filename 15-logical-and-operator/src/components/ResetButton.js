function ResetButton(props) {
    const {buttonStyle, setCount, count} = props
    const resetCount = () => {
        setCount(0);
      };
    
   
    return (
        count > 0 && (
            <div>
              <button onClick={resetCount} style={buttonStyle}>
                Reset
              </button>
            </div>
          )
    )
}

export default ResetButton