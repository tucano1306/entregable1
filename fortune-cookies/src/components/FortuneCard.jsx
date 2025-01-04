const FortuneCard = ({ phrase }) => {
  return (
    <div className="fortune-card">
      <p className="fortune-phrase">{phrase.phrase}</p>
      <p className="fortune-author">- {phrase.author}</p>
    </div>
  );
}

export default FortuneCard;