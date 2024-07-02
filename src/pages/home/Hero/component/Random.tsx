
const PositionRandomCircle = [
    {
        class: "border-green-500  bottom-5 left-20 md:bottom-20 lg:left-[300px]"
    },
    {
        class: "border-green-500  bottom-40 right-20 lg:right-[50px]"
    },
    {
        class: "border-green-500  bottom-[290px] left-[150px] lg:left-[530px] lg:top-[100px]"
    },
    {
        class: "border-red-500 bottom-80 left-[60px] md:left-[260px] lg:left-[550px] lg:top-[40px]"
    },
    {
        class: "border-red-500 bottom-[80px] right-[60px] "
    },
    {
        class: "border-red-500 bottom-[380px] right-[150px] lg:right-[100px]"
    }
]
const PositionRandom = [
    {
        class: "border-blue-500 left-5 bottom-10 md:left-[200px] lg:left-[500px]"
    },
    {
        class: "border-blue-500 right-20 bottom-10"
    },
    {
        class: "border-blue-500 right-20 bottom-80 lg:right-[50px]"
    },
    {
        class: "border-blue-500 bottom-40 left-[50px] md:left-[250px] lg:left-[600px] xl:left-[900px]"
    }
]

const Random = () => {
    const styleRandomCircle = "absolute w-3 h-3 border rounded-full"
    const styleRandom = "absolute w-3 h-3 border rotate-45"
    return (
        <>
            {PositionRandomCircle.map((item, index) => (
                <div className={`${styleRandomCircle} ${item.class}`} key={index}></div>
            ))}
            {PositionRandom.map((item, index) => (
                <div className={`${styleRandom} ${item.class}`} key={index}></div>
            ))}
        </>
    )
}

export default Random