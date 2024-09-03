import "./MainCard.css";

function MainCard({ data }) {
    let calidades = ["Buena", "Decente", "Moderada", "Mala", "Muy mala"];
    return (
        <>
            <div className="container">
                <p>Calidad del aire: {calidades[data.list[0].main.aqi]}</p>
            </div>
        </>
    );
}

export default MainCard;
