import React from 'react';
import {useEffect} from 'react';
import './App.css';
import {useInteractJS, puzzlePositon} from './PuzzleHooks';
import PazzleA from './img/sakasakuma-a.png';
import PazzleB from './img/sakasakuma-b.png';
import PazzleC from './img/sakasakuma-c.png';
import PazzleD from './img/sakasakuma-d.png';
import PazzleE from './img/sakasakuma-e.png';
import PazzleF from './img/sakasakuma-f.png';
import PazzleG from './img/sakasakuma-g.png';
import PazzleH from './img/sakasakuma-h.png';
import PazzleI from './img/sakasakuma-i.png';

/**
 * App function
 * @return {React.FC}
 */
const App: React.FC = () => {
// アルファベットと配置の関係
// A B C
// D E F
// G H I J
// piece : 各ピースのコンポーネント
// image : パズルで表示する画像
// ans : 「アルファベットと配置の関係」に沿った答えの位置
  const placement = {
    a: {piece: useInteractJS(), image: PazzleC, ans: 'C'},
    b: {piece: useInteractJS(puzzlePositon.b), image: PazzleH, ans: 'H'},
    c: {piece: useInteractJS(puzzlePositon.c), image: PazzleE, ans: 'E'},
    d: {piece: useInteractJS(puzzlePositon.d), image: PazzleD, ans: 'D'},
    e: {piece: useInteractJS(puzzlePositon.e), image: PazzleA, ans: 'A'},
    f: {piece: useInteractJS(puzzlePositon.f), image: PazzleF, ans: 'F'},
    g: {piece: useInteractJS(puzzlePositon.g), image: PazzleB, ans: 'B'},
    h: {piece: useInteractJS(puzzlePositon.h), image: PazzleG, ans: 'G'},
    j: {piece: useInteractJS(puzzlePositon.j), image: PazzleI, ans: 'I'},
  };

  // 答えの判定フラグ
  const ansFlg = placement.a.piece.positionName === placement.a.ans &&
  placement.b.piece.positionName === placement.b.ans &&
  placement.c.piece.positionName === placement.c.ans &&
  placement.d.piece.positionName === placement.d.ans &&
  placement.e.piece.positionName === placement.e.ans &&
  placement.f.piece.positionName === placement.f.ans &&
  placement.g.piece.positionName === placement.g.ans &&
  placement.h.piece.positionName === placement.h.ans &&
  placement.j.piece.positionName === placement.j.ans;

  useEffect(() => {
    // midway(パズルのピースを動かしている途中)の場合
    // 動かしているピース以外は動かないようにする。
    if (placement.a.piece.positionName === 'midway') {
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.b.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.c.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.d.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.e.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.f.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.g.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.h.piece.disable();
      placement.j.piece.disable();
    } else if (placement.h.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.j.piece.disable();
    } else if (placement.j.piece.positionName === 'midway') {
      placement.a.piece.disable();
      placement.b.piece.disable();
      placement.c.piece.disable();
      placement.d.piece.disable();
      placement.e.piece.disable();
      placement.f.piece.disable();
      placement.g.piece.disable();
      placement.h.piece.disable();
    } else {
      // midway以外の場合は全てのピースを動かせる状態にする。
      // → 結果的には稼働範囲が存在するピースだけが動かせる。
      placement.a.piece.enable();
      placement.b.piece.enable();
      placement.c.piece.enable();
      placement.d.piece.enable();
      placement.e.piece.enable();
      placement.f.piece.enable();
      placement.g.piece.enable();
      placement.h.piece.enable();
      placement.j.piece.enable();
    }
  }, [
    placement.a.piece.positionName,
    placement.b.piece.positionName,
    placement.c.piece.positionName,
    placement.d.piece.positionName,
    placement.e.piece.positionName,
    placement.f.piece.positionName,
    placement.g.piece.positionName,
    placement.h.piece.positionName,
    placement.j.piece.positionName,
  ]);

  // 初回のみ。
  useEffect(() => {
    // F, H, J以外は動かないようにする。
    placement.a.piece.disable();
    placement.b.piece.disable();
    placement.c.piece.disable();
    placement.d.piece.disable();
    placement.e.piece.disable();
    placement.g.piece.disable();
  }, []);

  return (
    // アルファベットと配置の関係
    // A B C
    // D E F
    // G H I J
    <div className='App'>
      <div className='App-puzzles'>
        {/* A */}
        <div
          ref={placement.a.piece.ref}
          style={{
            ...placement.a.piece.style,
            backgroundImage: 'url(' + placement.a.image + ')',
            backgroundSize: 'cover',
          }}
        >
        </div>
        {/* B */}
        <div
          ref={placement.b.piece.ref}
          style={{
            ...placement.b.piece.style,
            backgroundImage: 'url(' + placement.b.image + ')',
            backgroundSize: 'cover',
          }}
        >
        </div>
        {/* C */}
        <div
          ref={placement.c.piece.ref}
          style={{
            ...placement.c.piece.style,
            backgroundImage: 'url(' + placement.c.image + ')',
            backgroundSize: 'cover',
          }}
        >
        </div>
        {/* D */}
        <div
          ref={placement.d.piece.ref}
          style={{
            ...placement.d.piece.style,
            backgroundImage: 'url(' + placement.d.image + ')',
            backgroundSize: 'cover',
          }}
        >
        </div>
        {/* E */}
        <div
          ref={placement.e.piece.ref}
          style={{
            ...placement.e.piece.style,
            backgroundImage: 'url(' + placement.e.image + ')',
            backgroundSize: 'cover',
          }}
        >
        </div>
        {/* F */}
        <div
          ref={placement.f.piece.ref}
          style={{
            ...placement.f.piece.style,
            backgroundImage: 'url(' + placement.f.image + ')',
            backgroundSize: 'cover',
          }}
        >
        </div>
        {/* G */}
        <div
          ref={placement.g.piece.ref}
          style={{
            ...placement.g.piece.style,
            backgroundImage: 'url(' + placement.g.image + ')',
            backgroundSize: 'cover',
          }}
        >
        </div>
        {/* H */}
        <div
          ref={placement.h.piece.ref}
          style={{
            ...placement.h.piece.style,
            backgroundImage: 'url(' + placement.h.image + ')',
            backgroundSize: 'cover',
          }}
        >
        </div>
        {/* I */}
        <div
          ref={placement.j.piece.ref}
          style={{
            ...placement.j.piece.style,
            backgroundImage: 'url(' + placement.j.image + ')',
            backgroundSize: 'cover',
          }}
        >
        </div>
      </div>
      {ansFlg && <div>完成!! Congratulations!!</div>}
    </div>
  );
};

export default App;
