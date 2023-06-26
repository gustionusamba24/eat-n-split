import { Friends } from "./Friends";

export const FriendsList = ({
  friends,
  onSelection,
  selectedFriend,
}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};
