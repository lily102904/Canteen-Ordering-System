import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import '../styles/Loyalty.css'; 

function Loyalty() {
  const { user } = useAuth();
  const [loyaltyData, setLoyaltyData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
    
      setError("You must be logged in to view your loyalty points.");
      return;
    }


    fetch(`http://localhost:5000/api/loyalty/${user._id}`) // Assuming the backend endpoint requires user ID
      .then((response) => response.json())
      .then((data) => setLoyaltyData(data))
      .catch((error) => {
        console.error("Error fetching loyalty data:", error);
        setError("Failed to load loyalty points.");
      });
  }, [user]); 

  if (error) {
    return <div className="loyalty-container error">{error}</div>;
  }

  const handleRedeem = (reward) => {
    
    if (loyaltyData.points < reward.points) {
      setError("You do not have enough points to redeem this reward.");
      return;
    }

    
    fetch(`http://localhost:5000/api/redeem/${user._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rewardId: reward._id,
        rewardName: reward.name,
        points: reward.points,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the loyalty data in the frontend with the new points and history
        setLoyaltyData({
          ...loyaltyData,
          points: data.newPoints,
          history: [...loyaltyData.history, { rewardName: reward.name, date: new Date().toISOString() }],
        });
        setError(null); 
      })
      .catch((error) => {
        console.error("Error redeeming reward:", error);
        setError("Failed to redeem reward. Please try again later.");
      });
  };

  return (
    <div className="loyalty-container">
      <h1>Loyalty Program</h1>
      {loyaltyData ? (
        <>
          <div className="points-section">
            <h2>Your Loyalty Points</h2>
            <p className="points">{loyaltyData.points}</p>
          </div>
          <div className="rewards-section">
            <h2>Available Rewards</h2>
            <ul>
              {loyaltyData.rewards.map((reward, index) => (
                <li key={index} className="reward-item">
                  <div className="reward-info">
                    <span>{reward.name}</span>
                    <span>{reward.points} points</span>
                  </div>
                  <button
                    className="redeem-button"
                    disabled={loyaltyData.points < reward.points}
                    onClick={() => handleRedeem(reward)}
                  >
                    Redeem
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="history-section">
            <h2>Reward History</h2>
            <ul>
              {loyaltyData.history.map((historyItem, index) => (
                <li key={index} className="history-item">
                  <span>{historyItem.rewardName}</span>
                  <span>{historyItem.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Loading your loyalty details...</p>
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Loyalty;
