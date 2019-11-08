[![npm](https://img.shields.io/npm/v/vuejs-avataaars.svg?maxAge=2592000)](https://www.npmjs.com/package/vuejs-avataaars)
[![downloads](https://img.shields.io/npm/dt/vuejs-avataaars.svg?maxAge=2592000)](https://www.npmjs.com/package/vuejs-avataaars)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/orgordin/vuejs-avataaars/pulls)

# vuejs-avataaars
Simple avatar generator Vue component for avataaars.

 [Demo]   http://vuejs-avataaars.surge.sh/


<p align="center">
  <img height="230" width="230" src="https://github.com/orgordin/vuejs-avataaars/blob/master/image.png">
  <img height="230" width="230" src="https://github.com/orgordin/vuejs-avataaars/blob/master/image1.png">
  <img height="230" width="230" src="https://github.com/orgordin/vuejs-avataaars/blob/master/image2.png">
</p>

***[avataaars](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley).***

## Features:

  - SVG images - scale without loss of quality.
  - Customisable Props.
  - Random props.
 

## Installation
Quick install with NPM:

```
npm install vuejs-avataaars
```


Quick install with Yarn:

```
yarn add vuejs-avataaars
```

## Usage
in your `Vue component`

```vue
<template>
  <div>
    <!--- all random :) ---->
    <avataaars></avataaars>
    
    <!--- with some props ---->
    <avataaars
      :clotheType="'GraphicShirt'"
      :eyebrowType="'Angry'"
      :eyeType="'Cry'"
      :mouthType="'Eating'"
      :facialHairColor="'Blonde'"
      :graphicType="'Cumbia'">
    </avataaars>
  </div>
</template>

<script>
import Avataaars from 'vuejs-avataaars'

export default {
  components: {
    Avataaars
  }
}
</script>
```

### Props

The following props can be passed to the component:

The default state is for all props is random :)


#### isCircle
- true (default)
- false

#### circleColor
- color hex (default: #6fb8e0)

#### accessoriesType
- Blank
- Kurt
- Prescription01
- Prescription02
- Round
- Sunglasses
- Wayfarers
#### clotheType
- BlazerShirt
- BlazerSweater
- CollarSweater
- GraphicShirt
- Hoodie
- Overall
- ShirtCrewNeck
- ShirtScoopNeck
- ShirtVNeck
#### clotheColor
- Black
- Blue01
- Blue02
- Blue03
- Gray01
- Gray02
- Heather
- PastelBlue
- PastelGreen
- PastelOrange
- PastelRed
- PastelYellow
- Pink
- Red 
- White
#### eyebrowType
- Angry
- AngryNatural
- Default
- DefaultNatural
- FlatNatural
- RaisedExcited
- RaisedExcitedNatural
- SadConcerned
- SadConcernedNatural
- UnibrowNatural
- UpDown
- UpDownNatural
#### eyeType
- Close
- Cry
- Default
- Dizzy
- EyeRoll
- Happy
- Hearts
- Side
- Squint
- Surprised
- Wink
- WinkWacky
#### facialHairColor
- Auburn
- Black
- Blonde
- BlondeGolden
- Brown
- BrownDark
- PastelPink
- Platinum
- Red
- SilverGray
#### facialHairType
- Blank
- BeardMedium
- BeardLight
- BeardMagestic
- MoustacheFancy
- MoustacheMagnum
#### graphicType
- Bat
- Cumbia
- Deer
- Diamond
- Hola
- Pizza
- Resist
- Selena
- Bear
- SkullOutline
- Skull
#### hairColor
- Auburn
- Black
- Blonde
- BlondeGolden
- Brown
- BrownDark
- PastelPink
- Platinum
- Red
- SilverGray
#### mouthType
- Concerned
- Default
- Disbelief
- Eating
- Grimace
- Sad
- ScreamOpen
- Serious
- Smile
- Tongue
- Twinkle
- Vomit
#### skinColor
- Tanned
- Yellow
- Pale
- Light
- Brown
- DarkBrown
- Black
#### topType
 - NoHair
- Eyepatch
- Hat
- Hijab
- Turban
- WinterHat1
- WinterHat2
- WinterHat3
- WinterHat4
- LongHairBigHair
- LongHairBob
- LongHairBun
- LongHairCurly
- LongHairCurvy
- LongHairDreads
- LongHairFrida
- LongHairFro
- LongHairFroBand
- LongHairNotTooLong
- LongHairShavedSides
- LongHairMiaWallace
- LongHairStraight
- LongHairStraight2
- LongHairStraightStrand
- ShortHairDreads01
- ShortHairDreads02
- ShortHairFrizzle
- ShortHairShaggyMullet
- ShortHairShortCurly
- ShortHairShortFlat
- ShortHairShortRound
- ShortHairShortWaved
- ShortHairSides
- ShortHairTheCaesar
- ShortHairTheCaesarSidePart
------------------------------------------------
