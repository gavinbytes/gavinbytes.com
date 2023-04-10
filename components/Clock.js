import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Clock.module.css';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const l = 8;
const b = 11;
const sqrt2 = Math.sqrt(2);

const nums = [
  {
    littleX: [0,-l,-l,-l,  0,0,-l,0,  0,0,0,0,  0,0,0,0,  0,l,0,0,  l,l,l,0], // black
    littleY: [l,0,0,0,  l,l,0,l,  l,l,l,l,  l,l,l,l,  l,0,-l,l,  0,0,0,-l], // black
    bigX: [b,b,b,0,  0,b,0,0,  0,0,0,0,  0,0,0,0,  0,0,-b,0,  0,-b,-b,-b], // red
    bigY: [0,0,0,b,  -b,0,b,-b,  -b,-b,-b,-b,  -b,-b,-b,-b,  -b,-b,0,-b,  -b,0,0,0], // red
  },
  {
    littleX: [0,-l,-l,(-l/sqrt2),  l,-l,0,(-l/sqrt2),  (-l/sqrt2),0,0,(-l/sqrt2),  (-l/sqrt2),0,0,(-l/sqrt2),  0,-l,0,0,  l,l,l,0], // black
    littleY: [l,0,0,(l/sqrt2),  0,0,-l,(l/sqrt2),  (l/sqrt2),l,l,(l/sqrt2),  (l/sqrt2),l,l,(l/sqrt2),  l,0,-l,l,  0,0,0,-l], // black
    bigX:    [b,b,0,(-b/sqrt2),  0,0,0,(-b/sqrt2),  (-b/sqrt2),0,0,(-b/sqrt2),  (-b/sqrt2),0,0,(-b/sqrt2),  b,0,b,-b,  0,-b,-b,-b], // red
    bigY:    [0,0,b,(b/sqrt2),  -b,b,b,(b/sqrt2),  (b/sqrt2),-b,-b,(b/sqrt2),  (b/sqrt2),-b,-b,(b/sqrt2),  0,-b,0,0,  -b,0,0,0], // red
  },
  {
    littleX: [0,-l,-l,-l,  l,-l,-l,0,  0,-l,-l,0,  0,0,-l,-l,  0,l,l,0,  l,l,l,0], // black
    littleY: [l,0,0,0,  0,0,0,l,  l,0,0,l,  l,l,0,0,  l,0,0,l,  0,0,0,-l], // black
    bigX: [b,b,b,0,  0,b,0,0,  b,b,0,0,  0,b,b,0,  0,0,-b,-b,  0,-b,-b,-b], // red
    bigY: [0,0,0,b,  -b,0,b,-b,  0,0,-b,-b,  -b,0,0,-b,  -b,-b,0,0,  -b,0,0,0], // red
  },
  {
    littleX: [0,-l,-l,-l,  l,-l,-l,0,  0,-l,-l,0,  l,-l,-l,0,  0,l,0,0,  l,l,l,0], // black
    littleY: [l,0,0,0,  0,0,0,l,  l,0,0,l,  0,0,0,l,  l,0,-l,l,  0,0,0,-l], // black
    bigX: [b,b,b,0,  0,b,0,0,  b,b,0,0,  0,b,0,0,  b,-b,-b,0,  0,-b,-b,-b], // red
    bigY: [0,0,0,b,  -b,0,b,-b,  0,0,-b,-b,  -b,0,b,-b,  0,0,0,-b,  -b,0,0,0], // red
  },
  {
    littleX: [0,-l,0,-l,  0,0,0,0,  0,l,-l,0,  l,-l,-l,0,  (-l/sqrt2),(-l/sqrt2),0,0,  (-l/sqrt2),(-l/sqrt2),l,0], // black
    littleY: [l,0,l,0,  l,l,-l,l,  l,0,0,l,  0,0,0,l,  (l/sqrt2),(l/sqrt2),-l,l,  (l/sqrt2),(l/sqrt2),0,-l], // black
    bigX: [b,0,b,0,  0,0,0,0,  0,0,0,0,  0,b,0,0,  (-b/sqrt2),(-b/sqrt2),0,0,  (-b/sqrt2),(-b/sqrt2),0,-b], // red
    bigY: [0,b,0,b,  -b,-b,b,-b,  -b,-b,-b,-b,  -b,0,b,-b,  (b/sqrt2),(b/sqrt2),b,-b,  (b/sqrt2),(b/sqrt2),-b,0], // red
  },
  {
    littleX: [0,-l,-l,-l,  0,0,-l,-l,  0,l,l,0,  l,-l,-l,0,  0,l,0,0,  l,l,l,0], // black
    littleY: [l,0,0,0,  l,l,0,0,  l,0,0,l,  0,0,0,l,  l,0,-l,l,  0,0,0,-l], // black
    bigX: [b,b,b,0,  0,b,b,0,  0,0,-b,-b,  0,b,0,0,  b,-b,-b,0,  0,-b,-b,-b], // red
    bigY: [0,0,0,b,  -b,0,0,-b,  -b,-b,0,0,  -b,0,b,-b,  0,0,0,-b,  -b,0,0,0], // red
  },
  {
    littleX: [0,-l,-l,-l,  0,0,-l,-l,  0,l,l,0,  0,0,-l,0,  0,l,0,0,  l,l,l,0], // black
    littleY: [l,0,0,0,  l,l,0,0,  l,0,0,l,  l,l,0,l,  l,0,-l,l,  0,0,0,-l], // black
    bigX: [b,b,b,0,  0,b,b,0,  0,0,-b,-b,  0,b,0,0,  0,0,-b,0,  0,-b,-b,-b], // red
    bigY: [0,0,0,b,  -b,0,0,-b,  -b,-b,0,0,  -b,0,b,-b,  -b,-b,0,-b,  -b,0,0,0], // red
  },
  {
    littleX: [0,-l,-l,-l,  l,-l,-l,0,  (-l/sqrt2),(-l/sqrt2),0,0,  (-l/sqrt2),(-l/sqrt2),0,0,  (-l/sqrt2),(-l/sqrt2),0,0, (-l/sqrt2),(-l/sqrt2),l,0], // black
    littleY: [l,0,0,0,  0,0,0,l,  (l/sqrt2),(l/sqrt2),l,l,  (l/sqrt2),(l/sqrt2),l,l,  (l/sqrt2),(l/sqrt2),l,l,  (l/sqrt2),(l/sqrt2),0,-l], // black
    bigX: [b,b,b,0,  0,b,0,0,  (-b/sqrt2),(-b/sqrt2),0,0,  (-b/sqrt2),(-b/sqrt2),0,0,  (-b/sqrt2),(-b/sqrt2),0,0,  (-b/sqrt2),(-b/sqrt2),0,-b], // red
    bigY: [0,0,0,b,  -b,0,b,-b,  (b/sqrt2),(b/sqrt2),-b,-b,  (b/sqrt2),(b/sqrt2),-b,-b,  (b/sqrt2),(b/sqrt2),-b,-b,  (b/sqrt2),(b/sqrt2),-b,0], // red
  },
  {
    littleX: [0,-l,-l,-l,  0,0,-l,0,  0,l,0,0,  0,0,-l,0,  0,l,0,0,  l,l,l,0], // black
    littleY: [l,0,0,0,  l,l,0,l,  l,0,-l,l,  l,l,0,l,  l,0,-l,l,  0,0,0,-l], // black
    bigX: [b,b,b,0,  0,b,0,0,  0,0,-b,0,  0,b,0,0,  0,0,-b,0,  0,-b,-b,-b], // red
    bigY: [0,0,0,b,  -b,0,b,-b,  -b,-b,0,-b,  -b,0,b,-b,  -b,-b,0,-b,  -b,0,0,0], // red
  },
  {
    littleX: [0,-l,-l,-l,  0,0,-l,0,  0,l,0,0,  l,-l,-l,0,  (-l/sqrt2),(-l/sqrt2),0,0,  (-l/sqrt2),(-l/sqrt2),l,0], // black
    littleY: [l,0,0,0,  l,l,0,l,  l,0,-l,l,  0,0,0,l,  (l/sqrt2),(l/sqrt2),-l,l,  (l/sqrt2),(l/sqrt2),0,-l], // black
    bigX: [b,b,b,0,  0,b,0,0,  0,0,-b,0,  0,b,0,0,  (-b/sqrt2),(-b/sqrt2),0,0,  (-b/sqrt2),(-b/sqrt2),0,-b], // red
    bigY: [0,0,0,b,  -b,0,b,-b,  -b,-b,0,-b,  -b,0,b,-b,  (b/sqrt2),(b/sqrt2),b,-b,  (b/sqrt2),(b/sqrt2),-b,0], // red
  },
];

function Clock({ clockColor, backgroundColor }) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 190).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.clear();
    p5.background(backgroundColor);
    // Get time for clock
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let h1 = Math.floor(hours / 10);
    let h2 = hours % 10;
    let m1 = Math.floor(minutes / 10);
    let m2 = minutes % 10;

    let x = 20;
    let y = 20;
    const d = 29; // analog clock diameter
    const offset = 30; // space between analogs

    // H1
    let c = 0;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        p5.stroke(clockColor);
        p5.strokeWeight(2);
        p5.fill(backgroundColor);
        p5.circle(x, y, d);
        p5.strokeWeight(5);
        p5.line(x, y, x+nums[h1].littleX[c], y+nums[h1].littleY[c]);
        p5.line(x, y, x+nums[h1].bigX[c], y+nums[h1].bigY[c]);
        x += offset;
        c++;
      }
      x = 20;
      y += offset;
    }

    // H2
    x = 20 + (offset*4);
    y = 20;
    c = 0;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        p5.stroke(clockColor);
        p5.strokeWeight(2);
        p5.circle(x, y, d);
        p5.strokeWeight(5);
        p5.line(x, y, x+nums[h2].littleX[c], y+nums[h2].littleY[c]);
        // stroke('red');
        p5.line(x, y, x+nums[h2].bigX[c], y+nums[h2].bigY[c]);
        x += offset;
        c++;
      }
      x = 20 + (offset*4);
      y += offset;
    }

    // M1
    x = 20 + (2*(offset*4)) + 10;
    y = 20;
    c = 0;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        p5.stroke(clockColor);
        p5.strokeWeight(2);
        p5.circle(x, y, d);
        p5.strokeWeight(5);
        p5.line(x, y, x+nums[m1].littleX[c], y+nums[m1].littleY[c]);
        // stroke('red');
        p5.line(x, y, x+nums[m1].bigX[c], y+nums[m1].bigY[c]);
        x += offset;
        c++;
      }
      x = 20 + (2*(offset*4)) + 10;
      y += offset;
    }

    // M2
    x = 20 + (3*(offset*4)) + 10;
    y = 20;
    c = 0;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        p5.stroke(clockColor);
        p5.strokeWeight(2);
        p5.circle(x, y, d);
        p5.strokeWeight(5);
        p5.line(x, y, x+nums[m2].littleX[c], y+nums[m2].littleY[c]);
        // stroke('red');
        p5.line(x, y, x+nums[m2].bigX[c], y+nums[m2].bigY[c]);
        x += offset;
        c++;
      }
      x = 20 + (3*(offset*4)) + 10;
      y += offset;
    }
  };

  return (
    <div className={styles.clockBox}>
      <Sketch
        className={styles.sketch}
        setup={setup}
        draw={draw}
      />
    </div>
  );
}

export default Clock;