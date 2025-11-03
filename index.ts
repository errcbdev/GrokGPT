import { app } from './routes/call ai';

const PORT = process.env.PORT || 3000;

app.listen({ host: '0.0.0.0', port: Number(PORT) }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server running on ${address}`);
});
