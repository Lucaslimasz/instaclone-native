import React, {useState, useEffect} from 'react';
import { Animated } from 'react-native';

const OriginalAnimated = Animated.createAnimatedComponent(Original);

import {Small, Original} from './styles';

function LazyImage({smallSource, source, aspectRatio, shouldLoad,}) {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState();

  useEffect(() => {
    if(shouldLoad){
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Small
      source={smallSource}
      ratio={aspectRatio}
      resizeMode="contain"
      blurRadius={2}>
      {loaded && (
        <OriginalAnimated
          style={{opacity}}
          source={source}
          ratio={aspectRatio}
          resizeMode="contain"
          onLoadEnd={handleAnimate}
        />
      )}
    </Small>
  );
}

export default LazyImage;
