import React from 'react';
import './MessengerAppSection.css';

const MessengerAppSection = () => {
  const features = [
    {
      imgSrc: "https://www.online-tech-tips.com/wp-content/uploads/2020/06/calling-friends.png",
      title: "Texts",
      description: "You can send one-on-one and group texts."
    },
    {
      imgSrc: "https://media.idownloadblog.com/wp-content/uploads/2018/10/WhatsApp-stickers-001.jpg",
      title: "Stickers & Emoji",
      description: "You can share your feelings with stickers or emoji."
    },
    {
      imgSrc: "https://tse3.mm.bing.net/th?id=OIP.iDSONLX9KxUh6JOBYNoedQHaGA&pid=Api&P=0&h=180",
      title: "Home Tab",
      description: "You can access various information and services."
    }
  ];

  return (
    <section className="messenger-app-section" id="messenger-app">
      <h2>Messenger APP</h2>
      <p>New communication app that allows you to make FREE voice calls and send FREE messages whenever and wherever you are!</p>
      <div className="features">
        {features.map((feature) => (
          <div className="feature" key={feature.title}>
            <img src={feature.imgSrc} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MessengerAppSection;
