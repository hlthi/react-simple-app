import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { Icon, Header } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const AnyReactComponent = () => <Icon size="huge" color="red" name="map pin" />;

/*
  Static center and zoom.
  It does not change dynamically because the library is problematic in this regard.
 */
const mapDetail = {
  center: {
    lat: -37.3159,
    lng: 81.1496,
  },
  zoom: 0,
};

/**
 * Get markers by selected user coordinate.
 */
const getMarkers = props => {
  let intersection = false;
  if (props.selectedUserIds.length > 0) {
    intersection = props.allUser.filter(user => props.selectedUserIds.includes(user.id.toString()));
  }

  if (intersection) {
    const res = [];
    intersection.forEach(user => {
      res.push(
        <AnyReactComponent key={user.id} lat={user.address.geo.lat} lng={user.address.geo.lng} />,
      );
    });

    return res;
  }

  return [];
};

/**
 * I used googlemapreact library for dynamic google map.
 */
const getMaps = props => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyCsrGtI-XJVb8C5-ku6qWpmEhuez-zjQ9c' }}
    defaultCenter={mapDetail.center}
    defaultZoom={mapDetail.zoom}
  >
    {getMarkers(props)}
  </GoogleMapReact>
);

/**
 * Map layout.
 */
const Map = props => (
  <div className="map-graph">
    <Header as="h1" textAlign="center">
      User Location
    </Header>
    <div style={{ height: '40vh', minHeight: 400, width: '100%' }}>{getMaps(props)}</div>
  </div>
);

/**
 *   Dispatch to Props for redux usage
 */
const mapStateToProps = state => ({
  selectedUserIds: state.selectedUser.selectedIds,
  allUser: state.user.users,
});

/**
 * Dispatch to Props for redux usage
 * It's empty because i dont need any function.
 */
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

/**
 * Proptypes control via prop-types library.
 */
Map.propTypes = {
  selectedUserIds: PropTypes.array.isRequired,
  allUser: PropTypes.array.isRequired,
};

/**
 * redux <=>react connector with export
 */
export default connect(mapStateToProps, mapDispatchToProps)(Map);
