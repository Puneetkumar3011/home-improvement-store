import bathTopShower from '../../assets/images/bath/top-shower.jpeg';
import singleEnded from '../../assets/images/bath/single-ended.jpeg';
import ellisFreestanding from '../../assets/images/bath/ellis-freestanding.jpeg';
import modernCurved from '../../assets/images/bath/modern-curved.jpeg';
import handedShower from '../../assets/images/bath/left-handed-shower.jpeg';
import basinPedesta from '../../assets/images/basins/basin-pedesta.jpeg';
import ovelInset from '../../assets/images/basins/oval-inset.jpeg';
import rhodesEsta from '../../assets/images/basins/rhodes-esta.jpeg';
import wallHung from '../../assets/images/basins/wall-hung.jpeg';
import antiqueWooden from '../../assets/images/doors/antique-wooden.jpeg';
import massiveSolid from '../../assets/images/doors/massive-solid.jpeg';
import oldBlack from '../../assets/images/doors/old-black.jpeg';
import villageOld from '../../assets/images/doors/village-old.jpeg';
import vinusOld from '../../assets/images/doors/vinus-old.jpeg';
import alluminiumCasement from '../../assets/images/windows/alluminium-casement.jpeg';
import casementWindow from '../../assets/images/windows/casement-window.jpeg';
import pitfallSermon from '../../assets/images/windows/pitfall-sermon.jpeg';
import viewThrough from '../../assets/images/windows/view-through.jpeg';
import vinylReplacement from '../../assets/images/windows/vinyl-replacement.jpeg';
import willEfficient from '../../assets/images/windows/will-efficient.jpeg';
import ceramicDouble from '../../assets/images/tiles/ceramic-double.jpeg';
import homeRemote from '../../assets/images/tiles/home-remote.jpeg';
import livingRoom from '../../assets/images/tiles/living-room.jpeg';
import shiningFloor from '../../assets/images/tiles/shining-floor.jpeg';
import wallFloor from '../../assets/images/tiles/wall-n-floor.jpeg';
import inspiringIsland from '../../assets/images/kitchen/inspiring-island.jpeg';
import keysIsland from '../../assets/images/kitchen/keys-island.jpeg';
import smallIsland from '../../assets/images/kitchen/small-island.jpeg';
import smallBone from '../../assets/images/kitchen/smallbone-style.jpeg';

const SHOP_DATA = {
  bath: {
    id: 111,
    title: 'Bath',
    routeName: 'bath',
    items: [
      {
        id: 1111,
        name: 'Top Shower',
        imageUrl: `${bathTopShower}`,
        price: 355
      },
      {
        id: 1112,
        name: 'Single Ended',
        imageUrl: `${singleEnded}`,
        price: 275
      },
      {
        id: 1113,
        name: 'Ellis Freestanding',
        imageUrl: `${ellisFreestanding}`,
        price: 310
      },
      {
        id: 1114,
        name: 'Modern Curved',
        imageUrl: `${modernCurved}`,
        price: 215
      },
      {
        id: 1115,
        name: 'Handed Shower',
        imageUrl: `${handedShower}`,
        price: 410
      }
    ]
  },
  basins: {
    id: 112,
    title: 'Basins',
    routeName: 'basins',
    items: [
      {
        id: 1121,
        name: 'Basin Pedesta',
        imageUrl: `${basinPedesta}`,
        price: 95
      },
      {
        id: 1122,
        name: 'Oval Inset',
        imageUrl: `${ovelInset}`,
        price: 85
      },
      {
        id: 1123,
        name: 'Rhodes Esta',
        imageUrl: `${rhodesEsta}`,
        price: 117
      },
      {
        id: 1124,
        name: 'Wall Hung',
        imageUrl: `${wallHung}`,
        price: 89
      }
    ]
  },
  doors: {
    id: 113,
    title: 'Doors',
    routeName: 'doors',
    items: [
      {
        id: 1131,
        name: 'Antique Wooden',
        imageUrl: `${antiqueWooden}`,
        price: 999
      },
      {
        id: 1132,
        name: 'Massive Solid',
        imageUrl: `${massiveSolid}`,
        price: 975
      },
      {
        id: 1133,
        name: 'old Black',
        imageUrl: `${oldBlack}`,
        price: 875
      },
      {
        id: 1134,
        name: 'Village Old',
        imageUrl: `${villageOld}`,
        price: 850
      },
      {
        id: 1135,
        name: 'Vinus Old',
        imageUrl: `${vinusOld}`,
        price: 825
      }
    ]
  },
  windows: {
    id: 114,
    title: 'Windows',
    routeName: 'windows',
    items: [
      {
        id: 1141,
        name: 'Alluminim Casement',
        imageUrl: `${alluminiumCasement}`,
        price: 375
      },
      {
        id: 1142,
        name: 'Pitfall Sermon',
        imageUrl: `${pitfallSermon}`,
        price: 325
      },
      {
        id: 1143,
        name: 'Casement Window',
        imageUrl: `${casementWindow}`,
        price: 315
      },
      {
        id: 1144,
        name: 'View Through',
        imageUrl: `${viewThrough}`,
        price: 425
      },
      {
        id: 1145,
        name: 'Vinyl Replacement',
        imageUrl: `${vinylReplacement}`,
        price: 410
      },
      {
        id: 1146,
        name: 'Will Efficient',
        imageUrl: `${willEfficient}`,
        price: 395
      }
    ]
  },
  tiles: {
    id: 115,
    title: 'Tiles',
    routeName: 'tiles',
    items: [
      {
        id: 1151,
        name: 'Ceramic Double',
        imageUrl: `${ceramicDouble}`,
        price: 675
      },
      {
        id: 1152,
        name: 'Home Remote',
        imageUrl: `${homeRemote}`,
        price: 665
      },
      {
        id: 1153,
        name: 'Living Room',
        imageUrl: `${livingRoom}`,
        price: 585
      },
      {
        id: 1154,
        name: 'Shining Floor',
        imageUrl: `${shiningFloor}`,
        price: 635
      },
      {
        id: 1155,
        name: 'Wall and Floor',
        imageUrl: `${wallFloor}`,
        price: 665
      }
    ]
  },
  kitchen: {
    id: 116,
    title: 'Kitchen',
    routeName: 'kitchen',
    items: [
      {
        id: 1161,
        name: 'Inspiring Island',
        imageUrl: `${inspiringIsland}`,
        price: 990
      },
      {
        id: 1162,
        name: 'Keys Island',
        imageUrl: `${keysIsland}`,
        price: 925
      },
      {
        id: 1163,
        name: 'Small Island',
        imageUrl: `${smallIsland}`,
        price: 905
      },
      {
        id: 1164,
        name: 'Smallbone Style',
        imageUrl: `${smallBone}`,
        price: 895
      },
      {
        id: 1165,
        name: 'Wall and Floor',
        imageUrl: `${wallFloor}`,
        price: 665
      }
    ]
  }
};

export default SHOP_DATA;
