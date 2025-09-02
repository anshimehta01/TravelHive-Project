module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('New client connected:', socket.id);
  
      socket.on('join-group', (groupId) => {
        socket.join(groupId);
        console.log(`User joined group ${groupId}`);
      });
  
      socket.on('send-message', ({ groupId, message, userId }) => {
        io.to(groupId).emit('new-message', { userId, message });
      });
  
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  };