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
        id: 1,
        name: 'Top Shower',
        imageUrl: `${bathTopShower}`,
        price: 355
      },
      {
        id: 2,
        name: 'Single Ended',
        imageUrl: `${singleEnded}`,
        price: 275
      },
      {
        id: 3,
        name: 'Ellis Freestanding',
        imageUrl: `${ellisFreestanding}`,
        price: 310
      },
      {
        id: 4,
        name: 'Modern Curved',
        imageUrl: `${modernCurved}`,
        price: 215
      },
      {
        id: 5,
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
        id: 1,
        name: 'Basin Pedesta',
        imageUrl: `${basinPedesta}`,
        price: 95
      },
      {
        id: 2,
        name: 'Oval Inset',
        imageUrl: `${ovelInset}`,
        price: 85
      },
      {
        id: 3,
        name: 'Rhodes Esta',
        imageUrl: `${rhodesEsta}`,
        price: 117
      },
      {
        id: 4,
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
        id: 1,
        name: 'Antique Wooden',
        imageUrl: `${antiqueWooden}`,
        price: 999
      },
      {
        id: 2,
        name: 'Massive Solid',
        imageUrl: `${massiveSolid}`,
        price: 975
      },
      {
        id: 3,
        name: 'old Black',
        imageUrl: `${oldBlack}`,
        price: 875
      },
      {
        id: 4,
        name: 'Village Old',
        imageUrl: `${villageOld}`,
        price: 850
      },
      {
        id: 5,
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
        id: 1,
        name: 'Alluminim Casement',
        imageUrl: `${alluminiumCasement}`,
        price: 375
      },
      {
        id: 2,
        name: 'Pitfall Sermon',
        imageUrl: `${pitfallSermon}`,
        price: 325
      },
      {
        id: 3,
        name: 'Casement Window',
        imageUrl: `${casementWindow}`,
        price: 315
      },
      {
        id: 4,
        name: 'View Through',
        imageUrl: `${viewThrough}`,
        price: 425
      },
      {
        id: 5,
        name: 'Vinyl Replacement',
        imageUrl: `${vinylReplacement}`,
        price: 410
      },
      {
        id: 6,
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
        id: 1,
        name: 'Ceramic Double',
        imageUrl: `${ceramicDouble}`,
        price: 675
      },
      {
        id: 2,
        name: 'Home Remote',
        imageUrl: `${homeRemote}`,
        price: 665
      },
      {
        id: 3,
        name: 'Living Room',
        imageUrl: `${livingRoom}`,
        price: 585
      },
      {
        id: 4,
        name: 'Shining Floor',
        imageUrl: `${shiningFloor}`,
        price: 635
      },
      {
        id: 5,
        name: 'Wall and Floor',
        imageUrl: `${wallFloor}`,
        price: 665
      }
    ]
  },
  kitchen: {
    id: 1156,
    title: 'Kitchen',
    routeName: 'kitchen',
    items: [
      {
        id: 1,
        name: 'Inspiring Island',
        imageUrl: `${inspiringIsland}`,
        price: 990
      },
      {
        id: 2,
        name: 'Keys Island',
        imageUrl: `${keysIsland}`,
        price: 925
      },
      {
        id: 3,
        name: 'Small Island',
        imageUrl: `${smallIsland}`,
        price: 905
      },
      {
        id: 4,
        name: 'Smallbone Style',
        imageUrl: `${smallBone}`,
        price: 895
      },
      {
        id: 5,
        name: 'Wall and Floor',
        imageUrl: `${wallFloor}`,
        price: 665
      }
    ]
  }
};

export default SHOP_DATA;
