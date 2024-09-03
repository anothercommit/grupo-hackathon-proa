function MainCard({ data }) {
    return (
        <>
            <p>Calidad del aire: {data.list[0].main.aqi}</p>
        </>
    )
}

export default MainCard