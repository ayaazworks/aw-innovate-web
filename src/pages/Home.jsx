import React from 'react';
import logo from '../logo.png'

function Home() {
  const styles = {
    label: {
      display: 'block',
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: 'black',
      marginBottom: '8px',
    },
    heading: {
      color: 'black',
      fontSize: '1.8rem',
      marginBottom: '10px',
    },
    devName: {
      fontSize: '1.2rem',
      color: 'black',
      margin: '25px 0 25px 0',
      fontWeight: '400',
    },
    email: {
      color: 'black', // Matching Privacy Policy accent blue[cite: 3]
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
    }
  }
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif', backgroundColor: "white" }}>
      <img src={logo} alt="Indian Charades Logo" style={{ width: '200px', height: 'auto', marginBottom: '20px' }} />
      <h1 style={{color: "black"}}>Indian Charades: Word Party Game</h1>
      <p style={{color: "black"}}>
        Indian Charades – The Ultimate Desi Headband Guessing Game!
      </p>

      <p style={{color: "black"}}>Bring the fun, laughter, and excitement of a classic party game straight to your phone with Indian Charades, a fast-paced headband style guessing game designed especially for India! Whether you’re hosting a family gathering, a festival celebration, or a friends’ night out, this game is guaranteed to create unforgettable moments.

      Indian Charades takes the traditional “guess the word” game and gives it a full desi twist. Tilt the phone up or down to mark correct or skipped answers, act out clues, shout hints, and enjoy non-stop entertainment across 6 uniquely Indian categories:

      🎬 Bollywood Movies

      Act out iconic scenes, mimic unforgettable dialogues, and test your filmy knowledge. From classic blockbusters to modern hits, Bollywood lovers will have a blast!

      🏏 Cricket Stars

      Perfect for cricket fans! Guess your favorite Indian cricket legends and rising stars while your friends act, cheer, or mime their signature moves.

      🍛 Desi Food

      Mouth-watering fun! Act out famous Indian dishes—from biryani and chaat to dosas and laddoos. Good luck guessing without getting hungry!

      🗺️ Indian Places

      Discover India’s diversity through clues about cities, states, and landmarks. A fun way to explore India while you play!

      🎉 Festivals

      Guess the festival using cultural cues, celebrations, rituals, and traditions. Perfect for festive gatherings with family and friends.

      🤹 Actions

      Universal fun—perform everyday Indian actions, expressions, or gestures. Great for kids, adults, and party groups of all ages.

      How to Play

      Hold your phone to your forehead.

      Your friends act out or describe the word on the screen.

      Tilt up for correct answers, tilt down to skip.

      Race against the timer and try to guess as many as possible!

      Simple, energetic, hilarious!</p>
      <h1 style={styles.heading}>Developer Details</h1>
      <p style={styles.devName}>Mohd Ayaaz Siddiqui</p>
      <span style={styles.label}>Support Email</span>
      <a href="mailto:ayaazatom@gmail.com" style={styles.email}>
        ayaazatom@gmail.com
      </a>
    </div>
  );
}

export default Home;