import { View } from "react-native";
import React from "react";
import Notice from "../../components/Notice";

const Notifications = () => {
  return (
    <View>
      <Notice
        content="Google developers are paid huge amount of salary."
        date="2000-01-01T08:15:30"
        category="Scholarship"
      />
      <Notice
        content="Google developers are paid huge amount of salary."
        date="2023-06-20"
        icon="newspaper-sharp"
        category="Examination"
      />
      <Notice
        icon="analytics"
        content="Google developers are paid huge amount of salary."
        date="2023-06-10"
        category="Adminstration"
      />
    </View>
  );
};

export default Notifications;
