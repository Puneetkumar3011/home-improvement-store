import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../collection-item/collection-item.component';

import { selectCollection } from '../../store/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const { items } = collection;
  return (
    <div className="collection-page">
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);