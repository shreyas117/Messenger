import { List, ListItemButton, ListItemText, Paper, Typography, Box } from '@mui/material';
import { Friend } from '../types';

interface FriendListProps {
  friends: Friend[];
  selectedFriendId: string;
  onFriendSelect: (friendId: string) => void;
}

export const FriendList = ({ friends, selectedFriendId, onFriendSelect }: FriendListProps) => {
  return (
    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6">Friends</Typography>
      </Box>
      <List sx={{ flexGrow: 1, overflow: 'auto' }}>
        {friends.map((friend) => (
          <ListItemButton
            key={friend.id}
            onClick={() => onFriendSelect(friend.id)}
            selected={friend.id === selectedFriendId}
          >
            <ListItemText primary={friend.name} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}; 