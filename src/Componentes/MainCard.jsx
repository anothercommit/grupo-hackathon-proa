function MainCard({ data }) {
    return (
        <>
            <div>
                <p>Calidad del aire: {data.list[0].main.aqi}</p>
            </div>
        </>
    );
}

export default MainCard;
