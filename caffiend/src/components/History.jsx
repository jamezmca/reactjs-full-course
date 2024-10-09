import { useAuth } from "../context/AuthContext";
import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getCaffeineAmount, timeSinceConsumption } from "../utils";

export default function History() {
    const { globalData } = useAuth()

    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-timeline" />
                <h2>History</h2>
            </div>
            <p><i>Hover for more information!</i></p>
            <div className="coffee-history">
                {Object.keys(globalData).sort((a, b) => b - a).map((utcTime, coffeeIndex) => {
                    const coffee = globalData[utcTime]
                    const timeSinceConsume = timeSinceConsumption(utcTime)
                    const originalAmount = getCaffeineAmount(coffee.name)
                    const remainingAmount = calculateCurrentCaffeineLevel({
                        [utcTime]: coffee
                    })

                    const summary = `${coffee.name} | ${timeSinceConsume} | $${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`

                    return (
                        <div title={summary} key={coffeeIndex}>
                            <i className="fa-solid fa-mug-hot" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}