<template>
<svg
    viewBox='0 0 264 280'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlns:xlink='http://www.w3.org/1999/xlink'>
    <desc>Created with getavataaars.com</desc>
    <defs>
      <circle id='path-1' cx='120' cy='120' r='120'></circle>
      <path
        d='M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z'
        id='path-2'></path>
      <path
        d='M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z'
        id='path-silhouette'></path>
    </defs>
    <g
      id='Avataaar'
      stroke='none'
      stroke-width='1'
      fill='none'
      fill-rule='evenodd'>
      <g
        transform='translate(-825.000000, -1100.000000)'
        id='Avataaar/Circle'>
        <g transform='translate(825.000000, 1100.000000)'>
        <template v-if="isCircle">
            <g
              id='Circle'
              stroke-width='1'
              fill-rule='evenodd'
              transform='translate(12.000000, 40.000000)'>
              <mask id='mask-1' fill='white'>
                <use xlink:href='#path-1'></use>
              </mask>
              <use
                id='Circle-Background'
                fill='#E6E6E6'
                xlink:href='#path-1'></use>
              <g
                id='Color/Palette/Blue-01'
                mask='url(#mask-1)'
                :fill=circleColor>
                <rect id='🖍Color' x='0' y='0' width='240' height='240'></rect>
              </g>
            </g>
            <mask id='mask-2' fill='white'>
              <use xlink:href='#path-2' />
            </mask>
        </template>
          <g id='Mask' />
          <g
            id='Avataaar'
            stroke-width='1'
            fill-rule='evenodd'
            fill='black'
            mask='url(#mask-2)'>
            <g id='Body' transform='translate(32.000000, 36.000000)'>
              <mask id='mask-silhouette' fill='white'>
                <use xlink:href='#path-silhouette'></use>
              </mask>
              <use :fill="skinColor === 'random' ? getRandomChoice(skinColors) : skinColors[skinColor]" xlink:href='#path-silhouette'></use>
              <path
                d='M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z'
                id='Neck-Shadow'
                fill-opacity="0.100000001"
                fill='#000000'
                mask='url(#mask-silhouette)'></path>
            </g>
            <svg v-html="clotheType === 'random' ? getRandomChoice(clothesType) : clothesType[clotheType]"></svg>
            <svg v-if="isClotheTypeGraphicShirt || clotheType === 'GraphicShirt'" :style="cssVars" v-html="graphicType === 'random' ? getRandomChoice(GraphicShirtTypes) : GraphicShirtTypes[graphicType]"></svg>
            <svg v-html="eyeType === 'random' ? getRandomChoice(eyeTypes) : eyeTypes[eyeType]"></svg>
            <svg v-html="mouthType === 'random' ? getRandomChoice(mouthTypes) : mouthTypes[mouthType]"></svg>
            <svg v-html="eyebrowType === 'random' ? getRandomChoice(eyebrowTypes) : eyebrowTypes[eyebrowType]"></svg>
            <svg>
                <g fill='black' transform='translate(76.000000, 82.000000)'>
                    <g
                      id='Nose/Default'
                      transform='translate(28.000000, 40.000000)'
                      opacity='0.16'>
                      <path
                        d='M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8'
                        id='Nose'>

                      </path>
                    </g>
                </g>
            </svg>
            <svg :style="cssVars" v-html="topType === 'random' ? getRandomChoice(topTypes) : topTypes[topType]"></svg>
            <svg :style="cssVars" v-html="facialHairType === 'random' ? getRandomChoice(facialHairTypes) : facialHairTypes[facialHairType]"></svg>
            <svg v-html="accessoriesType === 'random' ? getRandomChoice(accessoriesTypes) : accessoriesTypes[accessoriesType]"></svg>
          </g>
        </g>
      </g>
    </g>
</svg>
</template>

<script>
import { mouthTypes } from './assetsTypes/mouth'
import { eyeTypes } from './assetsTypes/eyes'
import { eyebrowTypes } from './assetsTypes/eyebrows'
import { clothesType } from './assetsTypes/clothes'
import { topTypes } from './assetsTypes/top'
import { accessoriesTypes } from './assetsTypes/accessories'
import { facialHairTypes } from './assetsTypes/facial-hair'
import { GraphicShirtTypes } from './assetsTypes/graphic-shirt'


export default {
     props: {
         isCircle: {
            type: Boolean,
            default: true
         },
         circleColor: {
            type: String,
             default: '#6fb8e0'
        },
        identifier: { type: String, default: 'random' },
        topType: { type: String, default: 'random' },
        accessoriesType: { type: String, default: 'random'},
        facialHairType: { type: String, default: 'random' },
        clotheType: { type: String, default: 'random' },
        eyeType: { type: String, default: 'random' },
        eyebrowType: { type: String, default: 'random' },
        mouthType: { type: String, default: 'random' },
        skinColor: { type: String, default: 'random' },
        graphicType: { type: String, default: 'random' },
        hairColor: { type: String, default: 'random' },
        facialHairColor: { type: String, default: 'random' },
        topColor: { type: String, default: 'random' },
        clotheColor: { type: String, default: 'random' },
     },
    methods: {
        getRandomChoice (items) {
            const itemsLength = Object.entries(items).length
            const value = Object.entries(items)[Math.floor((Math.random()*(itemsLength)))][1]
            if(value.includes('Clothing/Graphic-Shirt')) {
                this.isClotheTypeGraphicShirt = value.includes('Clothing/Graphic-Shirt')
            }
            return value
        }
    },
    data () {
        return {
            mouthTypes: mouthTypes,
            eyeTypes: eyeTypes,
            topTypes: topTypes,
            clothesType: clothesType,
            eyebrowTypes: eyebrowTypes,
            facialHairTypes: facialHairTypes,
            accessoriesTypes: accessoriesTypes,
            GraphicShirtTypes: GraphicShirtTypes,
            hatAndShirtColors: {
                Black: "#262E33",
                Blue01: "#65C9FF",
                Blue02: "#5199E4",
                Blue03: "#25557C",
                Gray01: "#E6E6E6",
                Gray02: "#929598",
                Heather: "#3C4F5C",
                PastelBlue: "#B1E2FF",
                PastelGreen: "#A7FFC4",
                PastelOrange: "#FFDEB5",
                PastelRed: "#FFAFB9",
                PastelYellow: "#FFFFB1",
                Pink: "#FF488E",
                Red: "#FF5C5C",
                White: "#FFFFFF"
            },
            hairColors: {
                Auburn: "#A55728",
                Black: "#2C1B18",
                Blonde: "#B58143",
                BlondeGolden: "#D6B370",
                Brown: "#724133",
                BrownDark: "#4A312C",
                PastelPink: "#F59797",
                Platinum: "#ECDCBF",
                Red: "#C93305",
                SilverGray: "#E8E1E1"
            },
            skinColors: {
                Tanned: "#FD9841",
                Yellow: "#F8D25C",
                Pale: "#FFDBB4",
                Light: "#EDB98A",
                Brown: "#D08B5B",
                DarkBrown: "#AE5D29",
                Black: "#614335"
            },
            isClotheTypeGraphicShirt: false,
        }
    },
    computed: {
        cssVars () {
          return {
            '--avataaar-hair-color': this.hairColor === 'random' ? this.getRandomChoice(this.hairColors) : this.hairColors[this.hairColor],
            '--avataaar-facial-hair-color': this.facialHairColor === 'random' ? this.getRandomChoice(this.hairColors) : this.hairColors[this.facialHairColor],
              '--avataaar-hat-color': this.topColor === 'random' ? this.getRandomChoice(this.hatAndShirtColors) : this.hatAndShirtColors[this.topColor],
              '--avataaar-shirt-color': this.clotheColor === 'random' ? this.getRandomChoice(this.hatAndShirtColors) : this.hatAndShirtColors[this.clotheColor],

          }
        }
    }
}
</script>

<style>
</style>
