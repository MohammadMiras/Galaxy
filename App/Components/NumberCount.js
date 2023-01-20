import useCounter from "../Hooks/UseCounter"

const NumberCount = ({ item, onScreen }) => {
    const number = useCounter(item, onScreen)
    return <>
        <h2 className="text-4xl mb-2 font-bold">{number}</h2>
    </>
}
export default NumberCount