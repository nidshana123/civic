@@ .. @@
 import {
   Box,
   Typography,
   Card,
   CardContent,
   Grid,
   Container,
   Button,
+  useTheme,
+  alpha,
 } from "@mui/material";
 import AssignmentIcon from "@mui/icons-material/Assignment";
@@ .. @@
 
 export default function Dashboard() {
   const { t, i18n } = useTranslation();
+  const theme = useTheme();
   const [issues, setIssues] = useState([]);
@@ .. @@
   const StatCardUI = ({ icon, label, value, color, secondary }) => (
     <Card
       className="dash-stat-card"
       sx={{
         minWidth: 180,
         height: 140,
         borderRadius: 6,
         background: "#fff",
-        boxShadow: "0 2px 20px #8BA47322",
+        boxShadow: `0 2px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
         mx: { xs: 2, md: 3 },
         mb: { xs: 3, md: 0 },
         transition: "transform 0.3s",
         "&:hover": {
           transform: "scale(1.07)",
+          boxShadow: `0 4px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
         },
       }}
       elevation={0}
@@ .. @@
       className="dashboard-page"
       sx={{
-        bgcolor: "#f6f7f1",
+        bgcolor: theme.palette.background.default,
         minHeight: "100vh",
         display: "flex",
         flexDirection: "column",
@@ .. @@
         <StatCardUI
-          icon={<BarChartIcon sx={{ color: "#6B8A47", fontSize: 28 }} />}
+          icon={<BarChartIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />}
           label={t("totalIssues") || "Total Issues"}
           value={totalIssues}
         />
         <StatCardUI
-          icon={<PeopleIcon sx={{ color: "#6B8A47", fontSize: 28 }} />}
+          icon={<PeopleIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />}
           label={t("totalDepartments") || "Total Departments"}
           value={totalDepartments}
         />
         <StatCardUI
-          icon={<GroupIcon sx={{ color: "#6B8A47", fontSize: 28 }} />}
+          icon={<GroupIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />}
           label={t("totalStaff") || "Total Staff"}
           value={totalStaff}
         />
         <StatCardUI
-          icon={<AssignmentIcon sx={{ color: "#6B8A47", fontSize: 28 }} />}
+          icon={<AssignmentIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />}
           label={t("verified") || "Verified Issues"}
           value={verifiedIssues}
         />
         <StatCardUI
-          icon={<AutorenewIcon sx={{ color: "#6B8A47", fontSize: 28 }} />}
+          icon={<AutorenewIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />}
           label={t("inProgress") || "In Progress"}
           value={inProgress}
         />
         <StatCardUI
-          icon={<CheckCircleIcon sx={{ color: "#6B8A47", fontSize: 28 }} />}
+          icon={<CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />}
           label={t("resolved") || "Resolved"}
           value={resolved}
         />
@@ .. @@
               sx={{
                 bgcolor: "#fff",
                 borderRadius: 6,
-                boxShadow: "0 2px 16px #79a06419",
+                boxShadow: `0 2px 16px ${alpha(theme.palette.primary.main, 0.08)}`,
                 height: "100%",
                 width: "100%",
                 display: "flex",
@@ .. @@
                   variant="h5"
                   fontWeight="bold"
                   sx={{
-                    color: "#3b5d3a",
+                    color: theme.palette.primary.main,
                     mb: 3,
                     display: "flex",
                     alignItems: "center",
                     fontSize: 28,
                   }}
                 >
-                  <BarChartIcon sx={{ mr: 2, color: "#6B8A47", fontSize: 32 }} />
+                  <BarChartIcon sx={{ mr: 2, color: theme.palette.primary.main, fontSize: 32 }} />
                   {t("topCategories") || "Top Categories"}
                 </Typography>
@@ .. @@
               sx={{
                 bgcolor: "#fff",
                 borderRadius: 6,
-                boxShadow: "0 2px 16px #79a06419",
+                boxShadow: `0 2px 16px ${alpha(theme.palette.primary.main, 0.08)}`,
                 height: "100%",
                 width: "100%",
                 display: "flex",
@@ .. @@
                   variant="h5"
                   fontWeight="bold"
                   sx={{
-                    color: "#3b5d3a",
+                    color: theme.palette.primary.main,
                     mb: 3,
                     display: "flex",
                     alignItems: "center",
                     fontSize: 28,
                   }}
                 >
-                  <PieChartIcon sx={{ mr: 2, color: "#6B8A47", fontSize: 32 }} />
+                  <PieChartIcon sx={{ mr: 2, color: theme.palette.primary.main, fontSize: 32 }} />
                   {t("resolutionPerformance") || "Resolution Performance"}
                 </Typography>