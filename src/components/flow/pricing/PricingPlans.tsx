'use client';

import { Box, Container, Typography, Card, CardContent, Button, Chip } from '@mui/material';
import { Check, Bolt } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { PRICING_PLANS, formatPrice } from '@/src/config/pricing';

export default function PricingPlans() {
  const handleChoosePlan = (planId: string) => {
    // Redirect to payment page with selected plan
    window.open(`https://flow.rxsynapse.com/payment?plan=${planId}`, '_blank');
  };

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 2, md: 3 },
        pb: { xs: 8, md: 12 },
        bgcolor: '#000',
        color: '#fff',
      }}
    >
      <Container maxWidth="xl" sx={{ overflow: 'visible' }}>
        {/* Plans Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 3,
            maxWidth: 860,
            mx: 'auto',
            pt: 3, // Increased padding to prevent badge clipping
            overflow: 'visible',
          }}
        >
          {PRICING_PLANS.map((plan, index) => {
            const isMostPopular = plan.badge?.includes('MOST POPULAR');
            const isBestValue = plan.badge?.includes('BEST VALUE');
            const isHighlighted = isMostPopular || isBestValue;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ overflow: 'visible' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'visible',
                    bgcolor: isHighlighted ? 'rgba(59, 130, 246, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                    border: isHighlighted ? '2px solid #3B82F6' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    position: 'relative',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: isHighlighted
                        ? '0 20px 40px rgba(59, 130, 246, 0.3)'
                        : '0 10px 30px rgba(0, 0, 0, 0.5)',
                    },
                  }}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <Chip
                      label={plan.badge}
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        height: 24,
                      }}
                    />
                  )}

                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    {/* Plan Name */}
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ mb: 1, color: '#fff', textAlign: 'center' }}
                    >
                      {plan.name}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', fontSize: '0.85rem' }}
                    >
                      {plan.description}
                    </Typography>

                    {/* Price */}
                    <Box sx={{ mb: 2, textAlign: 'center' }}>
                      <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{
                          color: isHighlighted ? '#3B82F6' : '#fff',
                          fontSize: '2.5rem',
                        }}
                      >
                        {formatPrice(plan.price)}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', mt: 0.5 }}>
                        Instant activation via UPI/Cards
                      </Typography>
                    </Box>

                    {/* Savings */}
                    {plan.savings && (
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                          color: '#10B981',
                          mb: 3,
                          textAlign: 'center',
                          fontSize: '0.85rem',
                        }}
                      >
                        {plan.savings}
                      </Typography>
                    )}

                    {/* Features */}
                    <Box sx={{ flexGrow: 1, mb: 3 }}>
                      {plan.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1,
                            mb: 1.5,
                          }}
                        >
                          <Check sx={{ fontSize: 18, color: '#10B981', flexShrink: 0, mt: 0.25 }} />
                          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem' }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* CTA Button */}
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => handleChoosePlan(plan.id)}
                      startIcon={<Bolt sx={{ fontSize: 18 }} />}
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 'bold',
                        textTransform: 'none',
                        fontSize: '1rem',
                        background: isHighlighted
                          ? 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
                          : 'rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        border: isHighlighted ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                        '&:hover': {
                          background: isHighlighted
                            ? 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)'
                            : 'rgba(255, 255, 255, 0.15)',
                        },
                      }}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
