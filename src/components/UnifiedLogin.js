@@ .. @@
 import {
   Box,
   Button,
   TextField,
   Typography,
   Paper,
   Divider,
+  useTheme,
+  alpha,
 } from "@mui/material";
 import logo from "./logo.jpg"; // <-- Adjust path if needed

-const PALETTE = {
-  oliveDark: "#3b5d3a",
-  olive: "#486a3e",
-  oliveLight: "#6B8A47",
-  accent: "#a3b18a",
-  bg: "#f5f7f5",
-  textLight: "#ffffff",
-};
-
 export default function UnifiedLogin() {
+  const theme = useTheme();
   const [email, setEmail] = useState("");
@@ .. @@
         minHeight: "100vh",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
-        bgcolor: PALETTE.oliveDark,
-        background: `linear-gradient(135deg, ${PALETTE.oliveDark} 0%, ${PALETTE.oliveLight} 100%)`,
+        bgcolor: theme.palette.primary.main,
+        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
         p: 3,
       }}
     >
@@ .. @@
           minHeight: 500,
           borderRadius: 4,
-          boxShadow: "0 8px 32px 0 rgba(59,93,58,0.18)",
+          boxShadow: `0 8px 32px 0 ${alpha(theme.palette.primary.main, 0.18)}`,
           background: "rgba(255,255,255,0.97)",
-          border: `1.5px solid ${PALETTE.accent}`,
+          border: `1.5px solid ${theme.palette.secondary.main}`,
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
@@ .. @@
           sx={{
             mb: 2,
             fontWeight: 700,
-            color: PALETTE.olive,
+            color: theme.palette.primary.main,
             textAlign: "center",
             fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
-            textShadow: "1px 1px 2px rgba(107,138,71,0.10)",
+            textShadow: `1px 1px 2px ${alpha(theme.palette.primary.main, 0.10)}`,
             letterSpacing: "1px",
             width: "100%",
           }}
@@ .. @@
         <Divider sx={{ mb: 3, bgcolor: PALETTE.oliveLight, width: "100%" }} />
+        <Divider sx={{ mb: 3, bgcolor: theme.palette.primary.light, width: "100%" }} />

         <Box
@@ .. @@
               "& .MuiOutlinedInput-root": {
                 "& fieldset": {
-                  borderColor: PALETTE.oliveLight,
+                  borderColor: theme.palette.primary.light,
                 },
                 "&:hover fieldset": {
-                  borderColor: PALETTE.olive,
+                  borderColor: theme.palette.primary.main,
                 },
                 "&.Mui-focused fieldset": {
-                  borderColor: PALETTE.oliveDark,
-                  boxShadow: `0 0 8px ${PALETTE.oliveLight}`,
+                  borderColor: theme.palette.primary.dark,
+                  boxShadow: `0 0 8px ${theme.palette.primary.light}`,
                 },
               },
             }}
@@ .. @@
               "& .MuiOutlinedInput-root": {
                 "& fieldset": {
-                  borderColor: PALETTE.oliveLight,
+                  borderColor: theme.palette.primary.light,
                 },
                 "&:hover fieldset": {
-                  borderColor: PALETTE.olive,
+                  borderColor: theme.palette.primary.main,
                 },
                 "&.Mui-focused fieldset": {
-                  borderColor: PALETTE.oliveDark,
-                  boxShadow: `0 0 8px ${PALETTE.oliveLight}`,
+                  borderColor: theme.palette.primary.dark,
+                  boxShadow: `0 0 8px ${theme.palette.primary.light}`,
                 },
               },
             }}
@@ .. @@
             fullWidth
             variant="contained"
             sx={{
-              bgcolor: PALETTE.olive,
+              bgcolor: theme.palette.primary.main,
               color: "#fff",
               fontWeight: 700,
               py: 1.5,
@@ -158,11 +149,11 @@ export default function UnifiedLogin() {
               borderRadius: 2,
               textTransform: "none",
               letterSpacing: "1px",
-              boxShadow: "0 4px 15px rgba(59,93,58,0.15)",
+              boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.15)}`,
               "&:hover": {
-                bgcolor: PALETTE.oliveDark,
-                boxShadow: "0 6px 18px rgba(59,93,58,0.22)",
+                bgcolor: theme.palette.primary.dark,
+                boxShadow: `0 6px 18px ${alpha(theme.palette.primary.main, 0.22)}`,
               },
               mt: 1,
             }}