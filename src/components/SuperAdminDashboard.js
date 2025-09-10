@@ .. @@
 import React, { useState, useEffect } from "react";
 import {
   Box,
   Typography,
   Button,
   Card,
   CardContent,
   Grid,
   Paper,
+  useTheme,
+  alpha,
 } from "@mui/material";
 import { DataGrid } from "@mui/x-data-grid";
@@ .. @@
 import logo from "./logo.jpg"; // Adjust path if needed

-// Updated color palette
-const PALETTE = {
-  oliveDark: "#3b5b27",      // Sidebar, header
-  olive: "#486c2c",          // Accent, hover
-  oliveLight: "#6b8e47",     // Button, highlight
-  beige: "#f6f7f1",          // Background
-  textLight: "#ffffff",
-};
-
 const SB_ICONS = {
@@ .. @@
 
 export default function SuperAdminDashboard() {
   const { t, i18n } = useTranslation();
+  const theme = useTheme();
   const [tab, setTab] = useState("dashboard");
@@ .. @@
         sx={{
           height: "100vh",
           display: "flex",
           flexDirection: "column",
-          bgcolor: PALETTE.beige,
+          bgcolor: theme.palette.background.default,
         }}
       >
         {/* Header */}
         <Box
           sx={{
-            backgroundColor: PALETTE.oliveDark,
-            color: PALETTE.textLight,
+            background: 'linear-gradient(135deg, #A6B984 0%, #4B5E40 100%)',
+            color: theme.palette.primary.contrastText,
             px: { xs: 2, md: 4 },
             py: { xs: 2, md: 2.5 },
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
-            boxShadow: "0 2px 8px 0 rgba(59,91,39,0.08)",
+            boxShadow: `0 2px 12px ${alpha(theme.palette.primary.main, 0.15)}`,
             position: "relative",
           }}
         >
@@ .. @@
             <Button
               onClick={toggleLanguage}
               sx={{
-                bgcolor: PALETTE.oliveLight,
-                color: PALETTE.textLight,
+                bgcolor: alpha(theme.palette.primary.light, 0.2),
+                color: theme.palette.primary.contrastText,
                 borderRadius: 2,
                 px: 3,
                 fontWeight: 600,
@@ -200,12 +195,12 @@ export default function SuperAdminDashboard() {
                 boxShadow: "none",
                 textTransform: "none",
                 "&:hover": {
-                  bgcolor: PALETTE.olive,
-                  color: PALETTE.textLight,
+                  bgcolor: alpha(theme.palette.primary.light, 0.3),
+                  color: theme.palette.primary.contrastText,
                 },
                 "&.Mui-disabled": {
-                  bgcolor: PALETTE.olive,
-                  color: PALETTE.textLight,
+                  bgcolor: alpha(theme.palette.primary.main, 0.5),
+                  color: theme.palette.primary.contrastText,
                 },
               }}
             >
@@ .. @@
             <Button
               onClick={handleLogout}
               sx={{
-                bgcolor: PALETTE.oliveLight,
-                color: PALETTE.textLight,
+                bgcolor: alpha(theme.palette.primary.light, 0.2),
+                color: theme.palette.primary.contrastText,
                 borderRadius: 2,
                 px: 3,
                 fontWeight: 600,
@@ -214,12 +209,12 @@ export default function SuperAdminDashboard() {
                 boxShadow: "none",
                 textTransform: "none",
                 "&:hover": {
-                  bgcolor: PALETTE.olive,
-                  color: PALETTE.textLight,
+                  bgcolor: alpha(theme.palette.primary.light, 0.3),
+                  color: theme.palette.primary.contrastText,
                 },
                 "&.Mui-disabled": {
-                  bgcolor: PALETTE.olive,
-                  color: PALETTE.textLight,
+                  bgcolor: alpha(theme.palette.primary.main, 0.5),
+                  color: theme.palette.primary.contrastText,
                 },
               }}
             >
@@ .. @@
             // Remove border, borderRadius, and boxShadow for flush layout
             border: "none",
             borderRadius: 0,
             boxShadow: "none",
-            background: PALETTE.bg,
+            background: theme.palette.background.default,
             minHeight: 0,
           }}
         >
           {/* Sidebar Navigation */}
           <nav
             style={{
-              background: PALETTE.oliveDark,
+              background: theme.palette.primary.main,
               minWidth: 220,
-              color: PALETTE.textLight,
+              color: theme.palette.primary.contrastText,
               height: "100%",
               overflowY: "auto",
               userSelect: "none",
-              boxShadow: "2px 0 16px 0 rgba(59,91,39,0.07)",
+              boxShadow: `2px 0 16px 0 ${alpha(theme.palette.primary.main, 0.1)}`,
             }}
           >
             <Box
               sx={{
                 fontWeight: 800,
                 p: "22px 32px",
                 letterSpacing: ".7px",
                 fontSize: 22,
-                borderBottom: `2px solid ${PALETTE.olive}`,
-                bgcolor: PALETTE.oliveDark,
-                color: PALETTE.textLight,
+                borderBottom: `2px solid ${theme.palette.primary.light}`,
+                bgcolor: theme.palette.primary.main,
+                color: theme.palette.primary.contrastText,
                 textAlign: "left",
               }}
             >
@@ .. @@
                     style={{
                       padding: "13px 32px",
                       cursor: "pointer",
-                      background: active ? PALETTE.olive : "transparent",
+                      background: active ? theme.palette.primary.light : "transparent",
                       fontWeight: active ? 700 : 500,
                       display: "flex",
                       alignItems: "center",
                       gap: 12,
                       borderLeft: active
-                        ? `5px solid ${PALETTE.oliveLight}`
+                        ? `5px solid ${theme.palette.secondary.main}`
                         : "5px solid transparent",
-                      color: PALETTE.textLight,
+                      color: theme.palette.primary.contrastText,
                       transition: "background-color 0.2s, color 0.2s",
                       userSelect: "none",
                       fontSize: "1.08rem",
@@ .. @@
                     onMouseEnter={e =>
                       !active &&
-                      (e.currentTarget.style.background = PALETTE.olive)
+                      (e.currentTarget.style.background = theme.palette.primary.light)
                     }
                     onMouseLeave={e =>
                       !active &&
@@ .. @@
           <Box
             sx={{
               flex: 1,
               p: { xs: 2, md: 4 },
               overflowY: "auto",
-              background: PALETTE.bg,
+              background: theme.palette.background.default,
               // Remove borderRadius and boxShadow for a flush look
               minHeight: 0,
             }}
           >