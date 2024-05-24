import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingIndicator() {
  return (
    <div className="flex-col items-center">
      <div className="mb-3">Loading...</div>
      <CircularProgress />
    </div>
  )
}