import bath from '../../assets/images/bath/bath.jpg';
import basins from '../../assets/images/basins/basins.jpeg';
import doors from '../../assets/images/doors/doors.jpg';
import windows from '../../assets/images/windows/windows.jpeg';
import tiles from '../../assets/images/tiles/tiles.jpg';
import kitchen from '../../assets/images/kitchen/kitchen.jpg';

const INITIAL_STATE = {
  sections: [
    {
      title: 'bath',
      imageUrl: `${bath}`,
      id: 11,
      linkUrl: 'shop/bath'
    },
    {
      title: 'basins',
      imageUrl: `${basins}`,
      id: 12,
      linkUrl: 'shop/basins'
    },
    {
      title: 'doors',
      imageUrl: `${doors}`,
      id: 13,
      linkUrl: 'shop/doors'
    },
    {
      title: 'windows',
      imageUrl: `${windows}`,
      id: 14,
      linkUrl: 'shop/windows'
    },
    {
      title: 'tiles',
      imageUrl: `${tiles}`,
      id: 15,
      linkUrl: 'shop/tiles'
    },
    {
      title: 'kitchen',
      imageUrl: `${kitchen}`,
      id: 16,
      linkUrl: 'shop/kitchen'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
