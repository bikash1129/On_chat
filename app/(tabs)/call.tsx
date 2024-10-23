import React, { useState } from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import { SafeAreaView, StyleSheet } from 'react-native';

const Call = () => {
  const [videocall, setVideocall] = useState(true);

  const rtcProps = {
    appId: '582d401f378d4b0180cfbc17515f2c10',
    channel: 'team-call',
    token: null,
  };

  const callbacks = {
    endCall: () => setVideocall(false),
  };

  return videocall ? (
    <SafeAreaView style={styles.container}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </SafeAreaView>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Call;
