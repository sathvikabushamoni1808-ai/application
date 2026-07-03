import Typography from "@mui/material/Typography";

interface TextProps {
  children: React.ReactNode;
  variant?:
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2";
}

function Text({
  children,
  variant = "body1",
}: TextProps) {
  return (
    <Typography variant={variant}>
      {children}
    </Typography>
  );
}

export default Text;