import "./MainCard.css";

function MainCard({ data }) {
    let calidades = ["Buena", "Decente", "Moderada", "Mala", "Muy mala"];
    return (
        <>
            <p>Calidad del aire: {calidades[data.list[0].main.aqi]}</p>
        </>
    );
}

export default MainCard;
