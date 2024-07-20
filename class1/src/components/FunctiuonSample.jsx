import PropTypes from "prop-types"

export const FunctiuonSample = (props) => {

    const {handleClick}=props
  return (
    <div>
        <p>This is a function componet.</p>
        <button onClick={handleClick}>Click me!</button>


    </div>
  )
}

FunctiuonSample.propTypes={
    handleClick:PropTypes.func.isRequired
}