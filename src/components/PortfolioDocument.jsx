import { Document, Page, Text, View, Link, StyleSheet } from '@react-pdf/renderer'
import { profile } from '../data/profile'
import { contactInfo, socialLinks, stats } from '../data/social'
import { skillGroups } from '../data/skills'
import { experience, education, certificates } from '../data/experience'
import { projects } from '../data/projects'

// A light, HR-friendly palette pulled straight from the site's own
// light-theme CSS variables (see src/index.css `html.light`), so the PDF
// reads like a natural extension of the portfolio rather than a
// mismatched export.
const COLORS = {
  ink: '#1B1F27',
  muted: '#626A7E',
  accent: '#3E63DD',
  accent2: '#C4691F',
  good: '#0F9D6E',
  border: '#DFE3EC',
  surface: '#F5F6F9',
  white: '#FFFFFF',
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 42,
    paddingBottom: 44,
    paddingHorizontal: 46,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: COLORS.ink,
  },

  // ---------- header ----------
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.ink,
  },
  title: {
    marginTop: 3,
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.accent,
  },
  availability: {
    marginTop: 6,
    fontSize: 8.5,
    color: COLORS.good,
  },
  contactBlock: {
    alignItems: 'flex-end',
    maxWidth: 220,
  },
  contactLine: {
    fontSize: 8.5,
    color: COLORS.muted,
    marginBottom: 2,
    textAlign: 'right',
  },
  linkLine: {
    fontSize: 8.5,
    color: COLORS.accent,
    marginBottom: 2,
    textAlign: 'right',
    textDecoration: 'none',
  },
  headerRule: {
    marginTop: 14,
    marginBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.accent,
  },

  // ---------- summary ----------
  summary: {
    fontSize: 10,
    lineHeight: 1.55,
    color: COLORS.ink,
  },

  // ---------- sections ----------
  section: {
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.ink,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionRule: {
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  // ---------- skills ----------
  skillGroup: {
    marginBottom: 10,
  },
  skillGroupLabel: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.accent2,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  skillName: {
    width: 110,
    fontSize: 9,
    color: COLORS.ink,
  },
  skillBarTrack: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.surface,
  },
  skillBarFill: {
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.accent,
  },
  skillLevel: {
    width: 28,
    fontSize: 8,
    color: COLORS.muted,
    textAlign: 'right',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  skillsCol: {
    width: '48%',
  },

  // ---------- experience / education items ----------
  item: {
    marginBottom: 11,
  },
  itemHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemRole: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.ink,
    maxWidth: 380,
  },
  itemProject: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Oblique',
    color: COLORS.accent,
    marginTop: 1,
    maxWidth: 380,
  },
  itemPeriod: {
    fontSize: 8.5,
    color: COLORS.muted,
    textAlign: 'right',
  },
  bulletRow: {
    flexDirection: 'row',
    marginTop: 4,
    paddingRight: 6,
  },
  bulletMark: {
    width: 9,
    fontSize: 9,
    color: COLORS.accent,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.45,
    color: COLORS.ink,
  },

  // ---------- education ----------
  eduDegree: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.ink,
    maxWidth: 380,
  },
  eduSchool: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Oblique',
    color: COLORS.accent,
    marginTop: 1,
  },

  // ---------- projects ----------
  projectCard: {
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  projectTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.ink,
    maxWidth: 360,
  },
  projectBadge: {
    fontSize: 7.5,
    color: COLORS.accent,
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  projectDescription: {
    marginTop: 4,
    fontSize: 9,
    lineHeight: 1.45,
    color: COLORS.ink,
  },
  projectMetaLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.muted,
  },
  projectMetaRow: {
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  projectMetaValue: {
    fontSize: 8.5,
    color: COLORS.ink,
  },
  projectLinksRow: {
    marginTop: 4,
    flexDirection: 'row',
  },
  projectLink: {
    fontSize: 8.5,
    color: COLORS.accent,
    textDecoration: 'none',
    marginRight: 14,
  },

  // ---------- certificates ----------
  certRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  certTitle: {
    fontSize: 9.5,
    color: COLORS.ink,
  },
  certIssuer: {
    fontSize: 9.5,
    color: COLORS.muted,
  },

  // ---------- achievements ----------
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statCard: {
    width: '25%',
    paddingRight: 10,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 15,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.accent,
  },
  statLabel: {
    marginTop: 2,
    fontSize: 8,
    color: COLORS.muted,
  },

  // ---------- footer ----------
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 46,
    right: 46,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 7.5,
    color: COLORS.muted,
  },
})

function SectionTitle({ children }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{children}</Text>
      <View style={styles.sectionRule} />
    </View>
  )
}

function SkillGroupBlock({ group }) {
  return (
    <View style={styles.skillGroup} wrap={false}>
      <Text style={styles.skillGroupLabel}>{group.label}</Text>
      {group.items.map((skill) => (
        <View key={skill.name} style={styles.skillRow}>
          <Text style={styles.skillName}>{skill.name}</Text>
          <View style={styles.skillBarTrack}>
            <View style={[styles.skillBarFill, { width: `${skill.level}%` }]} />
          </View>
          <Text style={styles.skillLevel}>{skill.level}%</Text>
        </View>
      ))}
    </View>
  )
}

export default function PortfolioDocument() {
  const generatedOn = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Split skill groups into two roughly-even columns for a compact,
  // resume-style layout instead of one long vertical list.
  const leftSkills = skillGroups.filter((_, i) => i % 2 === 0)
  const rightSkills = skillGroups.filter((_, i) => i % 2 === 1)

  const portfolioLink = { id: 'portfolio', label: 'Portfolio Site', url: profile.siteUrl }
  const allLinks = [...socialLinks, portfolioLink]

  return (
    <Document title={`${profile.name} — Portfolio`} author={profile.name} subject="Portfolio">
      <Page size="A4" style={styles.page} wrap>
        {/* ---------- header ---------- */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.title}>{profile.title}</Text>
            <Text style={styles.availability}>{profile.availability}</Text>
          </View>

          <View style={styles.contactBlock}>
            <Text style={styles.contactLine}>{contactInfo.email}</Text>
            <Text style={styles.contactLine}>{contactInfo.phone}</Text>
            <Text style={styles.contactLine}>{contactInfo.location}</Text>
            {allLinks.map((link) => (
              <Link key={link.id} src={link.url} style={styles.linkLine}>
                {link.label}
              </Link>
            ))}
          </View>
        </View>

        <View style={styles.headerRule} />

        {/* ---------- summary ---------- */}
        <Text style={styles.summary}>{profile.summary}</Text>

        {/* ---------- skills ---------- */}
        <View style={styles.section}>
          <SectionTitle>Skills &amp; Technologies</SectionTitle>
          <View style={styles.skillsGrid}>
            <View style={styles.skillsCol}>
              {leftSkills.map((group) => (
                <SkillGroupBlock key={group.id} group={group} />
              ))}
            </View>
            <View style={styles.skillsCol}>
              {rightSkills.map((group) => (
                <SkillGroupBlock key={group.id} group={group} />
              ))}
            </View>
          </View>
        </View>

        {/* ---------- experience ---------- */}
        <View style={styles.section}>
          <SectionTitle>Experience</SectionTitle>
          {experience.map((job) => (
            <View key={`${job.role}-${job.project}`} style={styles.item} wrap={false}>
              <View style={styles.itemHeaderRow}>
                <View>
                  <Text style={styles.itemRole}>{job.role}</Text>
                  <Text style={styles.itemProject}>{job.project}</Text>
                </View>
                <Text style={styles.itemPeriod}>{job.period}</Text>
              </View>
              {job.points.map((point, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={styles.bulletMark}>•</Text>
                  <Text style={styles.bulletText}>{point}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* ---------- education ---------- */}
        <View style={styles.section}>
          <SectionTitle>Education</SectionTitle>
          {education.map((edu) => (
            <View key={edu.degree} style={styles.item} wrap={false}>
              <View style={styles.itemHeaderRow}>
                <View>
                  <Text style={styles.eduDegree}>{edu.degree}</Text>
                  <Text style={styles.eduSchool}>{edu.school}</Text>
                </View>
                <Text style={styles.itemPeriod}>{edu.period}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* ---------- projects ---------- */}
        <View style={styles.section} break>
          <SectionTitle>Projects</SectionTitle>
          {projects.map((project) => (
            <View key={project.id} style={styles.projectCard} wrap={false}>
              <View style={styles.projectTitleRow}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectBadge}>{project.category}</Text>
              </View>
              <Text style={styles.projectDescription}>{project.description}</Text>

              <View style={styles.projectMetaRow}>
                <Text style={styles.projectMetaLabel}>Tech stack: </Text>
                <Text style={styles.projectMetaValue}>{project.stack.join(', ')}</Text>
              </View>
              <View style={styles.projectMetaRow}>
                <Text style={styles.projectMetaLabel}>Key features: </Text>
                <Text style={styles.projectMetaValue}>{project.features.join(', ')}</Text>
              </View>

              <View style={styles.projectLinksRow}>
                {project.github && project.github !== '#' && (
                  <Link src={project.github} style={styles.projectLink}>
                    GitHub Repository
                  </Link>
                )}
                {project.demo && project.demo !== '#' && (
                  <Link src={project.demo} style={styles.projectLink}>
                    Live Demo
                  </Link>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* ---------- certificates ---------- */}
        <View style={styles.section}>
          <SectionTitle>Certificates</SectionTitle>
          {certificates.map((cert) => (
            <View key={cert.id} style={styles.certRow} wrap={false}>
              <Text style={styles.certTitle}>{cert.title}</Text>
              {cert.issuer ? <Text style={styles.certIssuer}>{`  —  ${cert.issuer}`}</Text> : null}
              {cert.year ? <Text style={styles.certIssuer}>{`, ${cert.year}`}</Text> : null}
            </View>
          ))}
        </View>

        {/* ---------- achievements ---------- */}
        <View style={styles.section} wrap={false}>
          <SectionTitle>Achievements</SectionTitle>
          <View style={styles.statsGrid}>
            {stats.map((stat) => (
              <View key={stat.label} style={styles.statCard}>
                <Text style={styles.statValue}>
                  {stat.value}
                  {stat.suffix}
                </Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ---------- footer (repeats on every page) ---------- */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            {profile.name} — Portfolio · Generated {generatedOn}
          </Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
          />
        </View>
      </Page>
    </Document>
  )
}
