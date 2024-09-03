import "./MainCard.css";

function MainCard({ data }) {
    let calidades = ["Buena", "Decente", "Moderada", "Mala", "Muy mala"];
    return (
        <>
            <p>Calidad del aire: {calidades[data.list[0].main.aqi]}</p>
            <p>Contamintantes:</p>
            <ul>
                <li>PM2.5: {data.list[0].components.pm2_5}</li>
                <li>PM10: {data.list[0].components.pm10}</li>
                <li>O3: {data.list[0].components.o3}</li>
                <li>NO2: {data.list[0].components.no2}</li>
                <li>SO2: {data.list[0].components.so2}</li>
                <li>CO: {data.list[0].components.co}</li>
            </ul>
        </>
    );
}

export default MainCard;
